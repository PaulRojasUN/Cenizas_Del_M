import { Html } from '@react-three/drei'

const Gif = ({url}) => {
  return (
    <>
      <Html style={{ zIndex: -1 }} fullscreen>
        <img
          src={url}
          style={{ width: '100%', height: '100%' }}
        />
      </Html>
    </>
  )
}

export default Gif
