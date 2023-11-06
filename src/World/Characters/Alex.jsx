import { useGLTF } from '@react-three/drei'
import React from 'react'

export function Alex (props) {
  const { nodes, materials } = useGLTF('/assets/models/low_poly_character_rigged.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.282}>
          <primitive object={nodes.Armature_rootJoint} />
          <mesh
            receiveShadow
            geometry={nodes.Character_1.geometry}
            material={materials.Character}
            position={[0.052, -0.058, 0]}
            scale={7.292}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/low_poly_character_rigged.glb')
