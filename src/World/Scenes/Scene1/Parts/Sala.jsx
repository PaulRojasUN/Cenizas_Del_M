/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { KeyboardControls, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import Ecctrl, { EcctrlAnimation } from 'ecctrl'
import { Howl } from 'howler'
import React, { useEffect, useRef, useState } from 'react'
import { keyboardControls } from '../../../../hooks/useControls'
import { useGameStore } from '../../../../store/game'
import { getSceneScript } from '../../../../utils/script'
import { Alex } from '../../../Characters/Alex'
import { Alex_Main } from '../../../Characters/Alex_main'
import { Backpack } from '../Items/Backpack'
import { Flashlight } from '../Items/Flashlight'
import { Key } from '../Items/Key'
import { Phone } from '../Items/Phone'
import Lights from '../Lights'
import { House } from '../Places/House'
import { LivingRoom } from '../Places/LivingRoom'
import { Telephone } from '../Telephone'
import { Doorway } from '../Items/Doorway'

const Sala = () => {
  const alexRef = useRef()
  const { setPlace, setDialogue, setActionsScene1, setDecisionScene1, getActionsScene1, resetDialogue } = useGameStore.getState()
  const [decisionsScene1] = useGameStore((state) => [
    state.decisionsScene1
  ])

  const alexURL = '/assets/models/character/alex_main.glb'

  const animationSet = {
    idle: 'idle',
    walk: 'walking',
    run: 'running',
    jump: 'moving-jump',
    jumpIdle: 'idle-jump',
    jumpLand: 'idle',
    fall: 'idle', // This is for falling from high sky
    action1: 'pickup'
  }

  useFrame(() => {
    if (alexRef.current) {
      console.log('Alex Position:', alexRef.current.position.toArray())
    }
  })

  useEffect(() => {
    const showFirstDialog = () => {
      const showD2 = getActionsScene1('showD2')
      if (!showD2) {
        setTimeout(() => {
          const script = getSceneScript(1, [], 'scriptFirstDialog')
          setDialogue(script)
          setActionsScene1('showD1', true)
        }, 4000)
      }
    }

    showFirstDialog()
  }, [])

  const telSound = new Howl({
    src: ['/assets/sounds/tel.wav']
  })
  const [telephone, setTelephone] = useState(false)
  const [backpack, setBackpack] = useState(false)
  const [flashlight, setFlashlight] = useState(false)
  const [key, setKey] = useState(false)
  const [door, setDoor] = useState(false)
  const [pressed, setPressed] = useState('none')

  const handleKeyDown = (e) => {
    if (e.code === 'KeyR') {
      setPressed('r')
    }
  }

  const handleKeyUp = (e) => {
    if (e.code === 'KeyR') {
      setPressed('none')
    }
  }

  document.addEventListener('keydown', handleKeyDown)
  document.addEventListener('keyup', handleKeyUp)

  useEffect(() => {
    if (pressed === 'r' && telephone) {
      const showD2 = getActionsScene1('showD2')
      if (!showD2) {
        telSound.currentTime = 0
        telSound.volume = 0.2
        telSound.play()
        const script = getSceneScript(
          1,
          decisionsScene1,
          'scriptConversation'
        )
        setDialogue(script)
        setActionsScene1('showD2', true)
      } else {
        console.log('Ya llame a mi madre')
      }
    }
  }, [pressed, telephone])

  useEffect(() => {
    if (pressed === 'r' && backpack) {
      setDecisionScene1('hasBackpack', true)
    }
  }, [pressed, backpack])

  useEffect(() => {
    if (pressed === 'r' && flashlight && decisionsScene1.hasBackpack) {
      setDecisionScene1('hasFlashlight', true)
    }
  }, [pressed, flashlight])

  useEffect(() => {
    if (pressed === 'r' && key && decisionsScene1.hasBackpack) {
      setDecisionScene1('hasKey', true)
    }
  }, [pressed, flashlight])

  useEffect(() => {
    if (pressed === 'r' && door && decisionsScene1.hasBackpack) {
      setDecisionScene1('openDoor', true)
      setPlace('Calle')
      resetDialogue()
      window.location.reload()
    }
  }, [pressed, door])

  return (
    <>
      <Lights />
      <Physics>
        <KeyboardControls map={keyboardControls}>
          <Ecctrl
            autoBalance={false}
            maxVelLimit={8}
            capsuleRadius={0.35}
            floatHeight={0}
            capsuleHalfHeight={0.91}
            friction={0.2}
            name='alex'
            animated
          >
            <EcctrlAnimation characterURL={alexURL} animationSet={animationSet}>
              <Alex_Main position={[0, -0.8, 0]} scale={1.65} />
            </EcctrlAnimation>
          </Ecctrl>
        </KeyboardControls>
        <RigidBody colliders='trimesh' type='fixed'>
          <mesh position-y={-2.3} position-x={-2.2} rotation-x={-Math.PI / 2}>
            <planeGeometry attach='geometry' args={[21, 14]} />
            <meshStandardMaterial />
          </mesh>
        </RigidBody>
        <RigidBody
          type='fixed'
          onCollisionEnter={({ manifold, target, other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === 'alex') {
                setTelephone(true)
              }
            }
          }}
          onCollisionExit={({ manifold, target, other }) => {
            setTelephone(false)
          }}
        >
          {telephone && (
            <Text color='black' fontSize={0.09} position={[0.5, 0.4, -2]}>
              Presiona R para interactuar
            </Text>
          )}
          <Phone scale={0.01} position={[0, 0, 3]} rotation-y={1.2} />
        </RigidBody>
        {!decisionsScene1.hasBackpack && <RigidBody
          type='fixed' colliders='cuboid'
          onCollisionEnter={({ manifold, target, other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === 'alex') {
                setBackpack(true)
              }
            }
          }}
          onCollisionExit={({ manifold, target, other }) => {
            setBackpack(false)
          }}
                                         >
          <Backpack scale={0.8} position={[1.8, 0, -4]} rotation-y={1.5 + Math.PI} />
        </RigidBody>}
        {!decisionsScene1.hasFlashlight && <RigidBody
          type='fixed' colliders='cuboid'
          onCollisionEnter={({ manifold, target, other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === 'alex') {
                setFlashlight(true)
              }
            }
          }}
          onCollisionExit={({ manifold, target, other }) => {
            setFlashlight(false)
          }}
                                           >

          <Flashlight position={[-10.4, 0, 3]} rotation-y={1} />
        </RigidBody>}
        {!decisionsScene1.hasKey && <RigidBody
          type='fixed' colliders='cuboid'
          onCollisionEnter={({ manifold, target, other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === 'alex') {
                setKey(true)
              }
            }
          }}
          onCollisionExit={({ manifold, target, other }) => {
            setKey(false)
          }}>
          <Key scale={0.5} position={[2, 0, 3.3]} />
        </RigidBody>}

        {!decisionsScene1.openDoor && <RigidBody
          type='fixed' colliders='cuboid'
          onCollisionEnter={({ manifold, target, other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === 'alex') {
                setDoor(true)
              }
            }
          }}
          onCollisionExit={({ manifold, target, other }) => {
            setDoor(false)
          }}>                          
                               {/* izq */}
          <Doorway scale={3.8} scale-x={4.4} scale-y={4} position={[0.1, -1.8, -7.7]}/>
        </RigidBody>}

        <LivingRoom />
        <RigidBody>
          <mesh position-z={5.6}>
            <planeGeometry attach='geometry' args={[21, 5]} />
          </mesh>
        </RigidBody>
        <RigidBody>
          <mesh position-z={-7.6}>
            <planeGeometry attach='geometry' args={[21, 15]} />
          </mesh>
        </RigidBody>
        <RigidBody colliders='cuboid'>
          <mesh rotation-y={-Math.PI / 2} position-x={8}>
            <planeGeometry attach='geometry' args={[21, 15]} />
          </mesh>
        </RigidBody>
        <RigidBody>
          <mesh rotation-y={-Math.PI / 2} position-x={-10.5}>
            <planeGeometry attach='geometry' args={[21, 15]} />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  )
}

export default Sala
