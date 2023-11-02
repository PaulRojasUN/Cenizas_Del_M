import { IconReturn } from '../assets/icons/icons'
import { InitialTransition } from '../components/InitialTransition'
import { useAuthStore } from '../store/auth'

const Menu = () => {
  const [userLogged] = useAuthStore((state) => [
    state.userLogged
  ])
  return (
    <div className='mt-16 w-full  flex flex-col items-center'>
      <InitialTransition />
      <div exit={{ opacity: 0 }} className='flex flex-col gap-20 items-center'>
        <h2 className='text-novel text-4xl font-bold text-black uppercase'>Logged-in as {userLogged.name}</h2>
        <button className='text-novel text-4xl font-bold text-black uppercase hover:cursor-pointer hover:text-gray-900 z-40'>
          Iniciar juego
        </button>
        <button className='text-novel text-4xl font-bold text-black uppercase hover:cursor-pointer hover:text-gray-900 z-40'>
          Cargar partida
        </button>
        <button className='text-novel text-4xl font-bold text-black uppercase hover:cursor-pointer hover:text-gray-900 z-40'>
          Controles
        </button>
      </div>
      <div className='z-40 mr-20' style={{ marginLeft: 'auto' }}>
        <IconReturn size={64} />
      </div>
    </div>
  )
}

export default Menu
