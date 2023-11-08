import { Html, useTexture } from '@react-three/drei'
import React from 'react'
import { getSceneScript } from '../../../assets/script/script'
import DialoguesIntroduction from '../../../components/DialoguesIntroduction'

const Introduction = () => {
  const texture = useTexture('/assets/images/background2.jpg')
  const script = getSceneScript(0, [], '')
  return (
    <group>
      <mesh scale={17}>
        <planeGeometry args={[1, 1, 1]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      <Html center position={[-2.5, 0, 0]}>
        <DialoguesIntroduction content={script} />
      </Html>
    </group>
  )
}

export default Introduction
