
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Key(props) {
  const { nodes, materials } = useGLTF("/assets/models/scene1/Key.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Key1.geometry}
        material={materials.Brown}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/scene1/Key.glb");