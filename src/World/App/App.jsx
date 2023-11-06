import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import { setSceneInGame } from '../../api/game'
import { useGameStore } from '../../store/game'
import Scene1 from '../Scenes/Scene1/Scene1'
import { cameraSettings } from '../camera/cameraSetting'

const App = () => {
  const [scene] = useGameStore((state) => [state.scene])

  useEffect(() => {
    const consult = async () => {
      if (scene === 0) {
        await setSceneInGame(1)
      }
    }
    consult()
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
    </>
  )
}

export default App
