import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Backpack(props) {
  const { nodes, materials } = useGLTF("/assets/models/scene1/Backpack.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube097.geometry}
        material={materials.Brown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube097_1.geometry}
        material={materials.DarkBrown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube097_2.geometry}
        material={materials.Gold}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/scene1/Backpack.glb");