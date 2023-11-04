import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FPV as Fpv } from '../World/camera/FPV'
import { Ground } from '../World/test/Ground'
import BarMenu from '../components/BarMenu'
import Dialogue from '../World/Dialogue'

const Game = () => {
  return (
    <>
      <BarMenu />
      <Dialogue />
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Fpv />
        <Physics>
          <Ground />
        </Physics>
      </Canvas>
      <Dialogue titulo='Alex' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis architecto aliquam, tenetur perspiciatis ipsum eligendi? Placeat dicta mollitia aliquid alias, officia, vel unde sequi accusamus laborum dolorum natus blanditiis nesciunt!' />
      <div className='pointer'>+</div>
    </>
  )
}

export default Game
