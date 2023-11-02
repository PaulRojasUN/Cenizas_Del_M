import { useNavigate } from 'react-router-dom'
import { logout } from '../api/auth'
// import { InitialTransition } from '../components/InitialTransition'
import PixelButton from '../components/PixelButton'
import { useAuthStore } from '../store/auth'

const Menu = () => {
  const navigate = useNavigate()
  const [userLogged] = useAuthStore((state) => [
    state.userLogged
  ])

  const handleLogout = async (e) => {
    e.preventDefault()
    const res = await logout()
    if (res && res.type === 'success') {
      navigate('/')
    }
  }

  return (
    <>
      {/* <InitialTransition /> */}

      <div className='bg-white bg-opacity-50 rounded-lg p-4 '>
        <h2 className='font-pixelcraft text-4xl font-bold text-black uppercase'>Logged-in as {userLogged.name}</h2>
      </div>

      <div className='flex flex-col items-center justify-center mt-14 gap-0'>
        <PixelButton text='Iniciar juego' font='font-pixelcraft' />
        <PixelButton text='Controles' font='font-pixelcraft' />
        <PixelButton text='Salir' font='font-pixelcraft' handleFunction={handleLogout} />
      </div>
    </>
  )
}

export default Menu
