import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import { setSceneInGame } from '../api/game'
import { useGameStore } from '../store/game'
import ShowDialogues from './Dialogues/ShowDialogues'
import Scene1 from './Scenes/Scene1/Scene1'
import { cameraSettings } from './camera/cameraSetting'

const Experience = () => {
  const [scene] = useGameStore((state) => [state.scene])

  useEffect(() => {
    const consultScene = async () => {
      if (scene === 0) {
        await setSceneInGame(1)
      }
    }
    consultScene()
  }, [scene])

  return (
    <>
      <Canvas
        onPointerDown={(e) => {
          e.target.requestPointerLock()
        }}
        shadows
        camera={cameraSettings}
      >
        {scene === 1 && <Scene1 />}
      </Canvas>
      {/* <ShowDialogues /> */}
    </>
  )
}

export default Experience
