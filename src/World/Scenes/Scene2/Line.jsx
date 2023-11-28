import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useKeyboard } from '../../../hooks/useKeyboard';
import { useCircleGameStore } from '../../../store/circle-game';
import { useRef, useState } from 'react';

const LineGame = ({ size, lengthArray, velocity }) => {
  const [parts, coloredParts,lives,isPlaying] = useCircleGameStore((state) => [
    state.parts,
    state.coloredParts,
    state.lives,
    state.isPlaying,
  ]);

  const keyPressed = useRef(false);

  const { setColoredParts,setLives } = useCircleGameStore.getState();

  const { continueKey } = useKeyboard();
  const { width, height, depth } = size;

  const lineGeometry = new THREE.BoxGeometry(width, height, depth);
  const lineMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    side: THREE.DoubleSide,
  });
  const line = new THREE.Mesh(lineGeometry, lineMaterial);

  const dir = new THREE.Vector3(1, 0, 0);
  const origin = new THREE.Vector3(0, 0, 0);
  const length = lengthArray;
  const color = 0xff0000;
  const arrow = new THREE.ArrowHelper(dir, origin, length, color);
  line.add(arrow);

  line.position.set(0, 0, 0);
  line.rotation.z = Math.PI / 2;

  const consultTouchedPart = (rotation) => {
    if (rotation >= 0 && rotation < Math.PI / 4) {
      return 0;
    } else if (rotation >= Math.PI / 4 && rotation < Math.PI / 2) {
      return 1;
    } else if (rotation >= Math.PI / 2 && rotation < (3 * Math.PI) / 4) {
      return 2;
    } else if (rotation >= (3 * Math.PI) / 4 && rotation < Math.PI) {
      return 3;
    } else if (rotation >= Math.PI && rotation < (5 * Math.PI) / 4) {
      return 4;
    } else if (rotation >= (5 * Math.PI) / 4 && rotation < (3 * Math.PI) / 2) {
      return 5;
    } else if (rotation >= (3 * Math.PI) / 2 && rotation < (7 * Math.PI) / 4) {
      return 6;
    } else if (rotation >= (7 * Math.PI) / 4 && rotation < 2 * Math.PI) {
      return 7;
    } else {
      return 0;
    }
  };

  const eliminatePart = (indexTouchedPart) => {
    if (coloredParts.includes(indexTouchedPart)) {
      const newColoredParts = coloredParts.filter(
        (part) => part !== indexTouchedPart
      );
      setColoredParts(newColoredParts);
    }else {
      setLives(lives - 1)
    }
    setTimeout(() => {
      keyPressed.current = false;
    },500)
  };

  useFrame(({ clock }) => {
    if(isPlaying){
      line.rotation.z = clock.getElapsedTime() * velocity;
    }
  });

  useFrame(({ clock }) => {
    if (continueKey && !keyPressed.current && isPlaying) {
      keyPressed.current = true;
      console.log('continueKey')
      line.rotation.z = clock.getElapsedTime() * velocity;
      const rotationInTermsOfPi = line.rotation.z % (2 * Math.PI);
      const touchedPart = consultTouchedPart(rotationInTermsOfPi);
      eliminatePart(touchedPart);
    }
  });

  return <primitive object={line} />;
};

export default LineGame;
