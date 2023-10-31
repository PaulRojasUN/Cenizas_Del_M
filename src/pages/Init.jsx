import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useKeyboard } from '../hooks/useKeyboard'
import { useAuthStore } from '../store/auth'

const Init = () => {
  const navigate = useNavigate()
  const { continueKey } = useKeyboard()
  const [isAuthenticated] = useAuthStore((state) => [
    state.isAuthenticated
  ])

  useEffect(() => {
    if (continueKey) {
      console.log(isAuthenticated)
      if (isAuthenticated) {
        navigate('/menu')
      } else {
        navigate('/login')
      }
    }
  }, [continueKey])

  return (
    <motion.div exit={{ opacity: 0 }} className='mb-20'>
      <span className='text-novel text-4xl font-bold text-black uppercase'>
        Presione ENTER para continuar
      </span>
    </motion.div>
  )
}

export default Init
