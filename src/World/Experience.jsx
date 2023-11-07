import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'
import { useGameStore } from '../store/game'
import ShowDialogues from './Dialogues/ShowDialogues'
import Introduction from './Scenes/Introudction/Introduction'
import Scene1 from './Scenes/Scene1/Scene1'
import { cameraSettings } from './camera/cameraSetting'

const Experience = () => {
  const [scene] = useGameStore((state) => [state.scene])
  const { setScene, setPlace } = useGameStore.getState()

  // Esto es para saltarse la introduction (por ahora). Esto hara que si o si siempre este en la escena uno, en place Sala, entonces se debe eliminar para cambiar de escenas
  useEffect(() => {
    setScene(1)
    setPlace('Sala')
  }, [])

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
        {scene === 0 && <Introduction />}
      </Canvas>
      {/* <ShowDialogues /> */}
    </>
  )
}

export default Experience
