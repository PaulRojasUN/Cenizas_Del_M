import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Doorway(props) {
  const { nodes, materials } = useGLTF('/assets/models/scene1/Doorway Open.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.doorwayOpen.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.doorwayOpen_1.geometry}
        material={materials.wood}
      />
    </group>
  )
}

useGLTF.preload('/assets/models/scene1/Doorway Open.glb')