import { useRef, useState } from 'react';
import { useCircleGameStore } from '../../../store/circle-game';

const CircleGame = ({scale}) => {
  const [parts,coloredParts] = useCircleGameStore((state) => [state.parts,state.coloredParts]);

  const torusMeshes = [];  

  for (let i = 0; i < parts; i++) {
  const torusColor = coloredParts.includes(i) ? 0xff0000 : 0xffff00;
    torusMeshes.push(
      <mesh
        key={i}
        position={[0, 0, 0]}
        rotation={[0, 0, i * ((2 * Math.PI) / parts)]}
        scale={[scale, scale, scale]} 
      >
        <torusGeometry args={[10, 3, 16, 100, (2 * Math.PI) / parts]} />
        <meshBasicMaterial color={torusColor} />
      </mesh>
    );
  }

  return (
    <>
      {torusMeshes}
    </>
  )
};

export default CircleGame;
