import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FPV as Fpv } from '../World/camera/FPV'
import { Ground } from '../World/test/Ground'
import BarMenu from '../components/BarMenu'

const Game = () => {
  return (
    <>
      <BarMenu />
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Fpv />
        <Physics>
          <Ground />
        </Physics>
      </Canvas>
      <div className='pointer'>+</div>
    </>
  )
}

export default Game
