import { useGLTF } from '@react-three/drei'
import React from 'react'

export function Flashlight (props) {
  const { nodes, materials } = useGLTF('/assets/models/scene1/Flashlight.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh'].geometry}
        material={materials.mat21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_1'].geometry}
        material={materials.mat13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_2'].geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_3'].geometry}
        material={materials.mat24}
      />
    </group>
  )
}

useGLTF.preload('/assets/models/scene1/Flashlight.glb')
