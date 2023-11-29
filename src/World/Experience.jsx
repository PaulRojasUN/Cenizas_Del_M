import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { Suspense, useState } from 'react';
import { useGameStore } from '../store/game';
import ShowDialogues from './Dialogues/ShowDialogues';
import Introduction from './Scenes/Introudction/Introduction';
import Scene1 from './Scenes/Scene1/Scene1';
import { ChooseObjects } from './Scenes/Scene2/ChooseObjects/ChooseObjects';
import { Overlay } from './Scenes/Scene2/ChooseObjects/Overlay';
import GameCircle from './Scenes/Scene2/GameCircle/GameCircle';
import { cameraSettings } from './camera/cameraSetting';

const Experience = () => {
  const [scene, actionsGame] = useGameStore((state) => [
    state.scene,
    state.actionsGame,
  ]);
  const [requestPointerLock, setRequestPointerLock] = useState(true);
  return (
    <>
      <Canvas
        className="z-0"
        onPointerDown={(e) => {
          if (requestPointerLock) {
            e.target.requestPointerLock();
          }
        }}
        shadows
        camera={cameraSettings}
      >
        {scene === 0 && <Introduction />}
        {scene === 1 && <Scene1 />}
        {scene === 2 && (
          <>
            <color attach="background" args={['#ececec']} />
            <Suspense
              fallback={
                <Html>
                  <h1>Loading...</h1>
                </Html>
              }
            >
              <ChooseObjects setRequestPointerLock={setRequestPointerLock} />
            </Suspense>
          </>
        )}
      </Canvas>
      <ShowDialogues className="z-50" />
      {actionsGame.showOverlay && (
        <>
          <Leva hidden className="z-50" />
          <Overlay className="z-50" />
        </>
      )}
    </>
  );
};

export default Experience;
