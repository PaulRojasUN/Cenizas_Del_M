import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useGameStore } from '../store/game';
import ShowDialogues from './Dialogues/ShowDialogues';
import Introduction from './Scenes/Introudction/Introduction';
import Scene1 from './Scenes/Scene1/Scene1';
import GameCircle from './Scenes/Scene2/GameCircle';
import { cameraSettings } from './camera/cameraSetting';
import { useState } from 'react';

const Experience = () => {
  const [scene] = useGameStore((state) => [state.scene]);
  const [requestPointerLock, setRequestPointerLock] = useState(false);
  return (
    <>
      <Canvas
        onPointerDown={(e) => {
          if (requestPointerLock) {
            e.target.requestPointerLock();
          }
        }}
        shadows
        className="z-0"
        camera={cameraSettings}
      >
        {scene === 0 && <Introduction />}
        {scene === 1 && <Scene1 />}
        {scene === 2 && (
          <GameCircle setRequestPointerLock={setRequestPointerLock} />
        )}
      </Canvas>
      <ShowDialogues className="z-50" />
    </>
  );
};

export default Experience;
