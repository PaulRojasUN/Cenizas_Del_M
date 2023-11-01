import { motion } from 'framer-motion'
import { InitialTransition } from './InitialTransition'
import { useAuth } from '../context/AuthContext'



const Menu = () => {
  const auth = useAuth()
  const { displayName, email, photoUrl } = auth.userLogged;

  return (
    <div>
      <InitialTransition />
      <motion.div
        exit={{ opacity: 0 }}
        className='mb-20 flex flex-col gap-20 items-center'
      >
        <h2 className="text-novel text-4xl font-bold text-black uppercase">Logged-in as {displayName}</h2>
        <button className='text-novel text-4xl font-bold text-black uppercase hover:cursor-pointer hover:text-gray-900 z-50'>
          Iniciar juego
        </button>
        <button className='text-novel text-4xl font-bold text-black uppercase hover:cursor-pointer hover:text-gray-900 z-50'>
          Cargar partida
        </button>
        <button className='text-novel text-4xl font-bold text-black uppercase hover:cursor-pointer hover:text-gray-900 z-50'>
          Controles
        </button>
      </motion.div>
    </div>
  )
}

export default Menu
