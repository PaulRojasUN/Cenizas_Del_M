import { KeyboardControls, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import Ecctrl from 'ecctrl'
import { Howl } from 'howler'
import React, { useRef, useState } from 'react'
import { keyboardControls } from '../../../../hooks/useControls'
import { Alex } from '../../../Characters/Alex'
import Lights from '../Lights'
import { House } from '../Places/House'
import { Telephone } from '../Telephone'

const Sala = () => {
  const alexRef = useRef()

  useFrame(() => {
    if (alexRef.current) {
      console.log('Alex Position:', alexRef.current.position.toArray())
    }
  })

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

  if (pressed === 'r' && telephone) {
    telSound.currentTime = 0
    telSound.volume = Math.random()
    telSound.play()
  }

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
