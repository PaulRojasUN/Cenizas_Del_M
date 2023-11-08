import { KeyboardControls, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import Ecctrl from 'ecctrl'
import { Howl } from 'howler'
import React, { useEffect, useRef, useState } from 'react'
import { getSceneScript } from '../../../../assets/script/script'
import { keyboardControls } from '../../../../hooks/useControls'
import { useGameStore } from '../../../../store/game'
import { Alex } from '../../../Characters/Alex'
import Lights from '../Lights'
import { House } from '../Places/House'
import { Telephone } from '../Telephone'

const Sala = () => {
  const alexRef = useRef()
  const { setDialogue, setActionsScene1, getActionsScene1 } = useGameStore.getState()
  const [decisionsScene1] = useGameStore((state) => [
    state.decisionsScene1
  ])

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
      <Physics>
        <KeyboardControls map={keyboardControls}>
          <Ecctrl
            maxVelLimit={5}
            capsuleRadius={0.35}
            floatHeight={0.4}
            capsuleHalfHeight={0.3}
            friction={0.1}
            name='Telephone'
          >
            <Alex position={[0, -0.45, 0]} scale={0.5} />
          </Ecctrl>
        </KeyboardControls>
        <RigidBody>
          <mesh position-y={-2} rotation-x={-Math.PI / 2} receiveShadow>
            <planeGeometry attach='geometry' args={[15, 11]} />
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
          <Telephone
            position={[0.6, -0.5, -2.4]}
            color='red'
            scale={0.6}
            rotation-y={-Math.PI / 2}
          />
        </RigidBody>
        <House position={[-5.5, -1.9, 0]} />
      </Physics>

    </>
  )
}

export default Sala
