import { Html } from '@react-three/drei'
import { useEffect } from 'react'

const Gif = ({url}) => {
  useEffect(()=>{
    console.log('entroooooo')
  },[])
  return (
    <>
      <Html style={{ zIndex: -100 }} fullscreen>
        <img
          src={url}
          style={{ width: '100%', height: '100%' }}
        />
      </Html>
    </>
  )
}

export default Gif
