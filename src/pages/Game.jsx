import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FPV as Fpv } from '../World/camera/FPV'
import { Ground } from '../World/test/Ground'

const Game = () => {
  return (
    <Canvas>
      <Sky sunPosition={[100, 100, 20]} />
      <ambientLight intensity={0.5} />
      <Fpv />
      <Physics>
        <Ground />
      </Physics>
    </Canvas>
  )
}

export default Game
