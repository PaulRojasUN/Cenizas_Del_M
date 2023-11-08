import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Phone(props) {
  const { nodes, materials } = useGLTF("/assets/models/scene1/Phone.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Phone.geometry}
        material={materials.Mat}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/scene1/Phone.glb");
