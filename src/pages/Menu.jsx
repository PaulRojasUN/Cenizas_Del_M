import { motion } from 'framer-motion'
import { InitialTransition } from './InitialTransition'

const Menu = () => {
  return (
    <div>
      <InitialTransition />
      <motion.div
        exit={{ opacity: 0 }}
        className='mb-20 flex flex-col gap-20 items-center'
      >
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
