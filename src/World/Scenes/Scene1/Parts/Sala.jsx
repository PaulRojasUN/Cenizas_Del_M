import { KeyboardControls, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import Ecctrl, {EcctrlAnimation} from 'ecctrl'
import { Howl } from 'howler'
import React, { useEffect, useRef, useState } from 'react'
import { getSceneScript } from '../../../../assets/script/script'
import { keyboardControls } from '../../../../hooks/useControls'
import { useGameStore } from '../../../../store/game'
import { Alex } from '../../../Characters/Alex'
import Lights from '../Lights'
import { LivingRoom } from '../Places/LivingRoom'
import { House } from '../Places/House'
import { Telephone } from '../Telephone'
import { Alex_Main } from '../../../Characters/Alex_main'

const Sala = () => {
  const alexRef = useRef()
  const { setDialogue, setActionsScene1, getActionsScene1 } = useGameStore.getState()
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
    action1: 'pickup',
    action2: 'idle',
    action3: 'idle',
    action4: 'idle'
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
        console.log('Ya llame a mi mam')
      }
    }
  }, [pressed, telephone])

  return (
    <>
      <Lights />
      <Physics debug>
        <KeyboardControls map={keyboardControls}>
          <Ecctrl animated={true} autoBalance={false}
            maxVelLimit={8}
            capsuleRadius={0.35}
            floatHeight={0.8}
            capsuleHalfHeight={0.7}
            friction={0.2}
            name='Telephone'
          >
            <EcctrlAnimation characterURL={alexURL} animationSet={animationSet}>
              <Alex_Main position={[0, -1.5, 0]} scale={1.65} />
            </EcctrlAnimation>
          </Ecctrl>
        </KeyboardControls>
        <RigidBody colliders={'trimesh'} type="fixed">
          <mesh position-y={-2} position-x={-2.2} rotation-x={-Math.PI / 2}>
            <planeGeometry attach='geometry' args={[21, 14]} />
            <meshStandardMaterial />
          </mesh>
        </RigidBody>
        <RigidBody
          type='fixed'
          onCollisionEnter={({ manifold, target, other }) => {
            if (other.rigidBodyObject) {
              if (other.rigidBodyObject.name === 'Telephone') {
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
        </RigidBody>
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
        <RigidBody>
          <mesh rotation-y={-Math.PI/2} position-x={8}>
            <planeGeometry attach='geometry' args={[21, 15]} />
          </mesh>
        </RigidBody>
        <RigidBody>
          <mesh rotation-y={-Math.PI/2} position-x={-10} >
            <planeGeometry attach='geometry' args={[21, 15]} />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  )
}

export default Sala
