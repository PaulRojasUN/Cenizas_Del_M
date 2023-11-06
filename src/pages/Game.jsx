import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FPV as Fpv } from '../World/camera/FPV'
import { Ground } from '../World/test/Ground'
import BarMenu from '../components/BarMenu'
import Dialogues from '../components/Dialogues'

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
      <Dialogues
        scene={1}
        decisions={{ examinoPeriodicoDigital: true, tieneMochila: false }}
        nameScript='sala'
      />
      <div className='pointer'>+</div>
    </>
  )
}

export default Game
