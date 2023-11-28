import { Physics, useBox } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Vector3 } from 'three';
import { useKeyboard } from '../../../hooks/useKeyboard';

export function ArrowGame(props) {
  const { nodes, materials } = useGLTF(
    '/assets/models/minigames/arrow/scene.gltf'
  );
  const { parts, partColored1, partColored2 } = props;
  const { continueKey } = useKeyboard();
  const groupRef = useRef();
  const arrowRef = useRef();

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime();
  });

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime();
    const linePosition = groupRef.current.rotation.y % (2 * Math.PI);
    if (continueKey) {
      // Check if the line is touching the red parts of the torus
      // if (
      //   (linePosition >= partColored1 && linePosition <= partColored1 + 1) ||
      //   (linePosition >= partColored2 * ((2 * Math.PI) / parts) &&
      //     linePosition <= partColored2 + 1 * ((2 * Math.PI) / parts))
      // ) {
      //   console.log('Esta tocando');
      // } else {
      //   console.log('No esta tocando');
      // }
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group scale={0.025}>
        <group rotation={[0, 0, 0]} ref={arrowRef}>
          <mesh
            geometry={nodes.WoodenArrow_WoodenArrow_0.geometry}
            material={materials.WoodenArrow}
            position={[-0.202, 0.002, 0]}
          />
        </group>
      </group>
    </group>
  );
}
