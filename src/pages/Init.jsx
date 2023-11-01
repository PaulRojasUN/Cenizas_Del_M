import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useKeyboard } from '../hooks/useKeyboard'
import { useAuthStore } from '../store/auth'
import { useAuth } from '../context/AuthContext'

const Init = () => {
  const auth = useAuth()

  const onHandleGoogle = async () => {
    const result = await auth.loginWithGoogle();
    
    const logged = result.success ? true : false
    if (logged) {//(isAuthenticated) {
      navigate('/menu')
    } else {
      navigate('/login')
    }
    }

  const navigate = useNavigate()
  const { continueKey } = useKeyboard()
  const [isAuthenticated] = useAuthStore((state) => [
    state.isAuthenticated
  ])

  useEffect(() => {
    if (continueKey) {
      //console.log(isAuthenticated)
      // const logged = onHandleGoogle()
      // if (logged) {//(isAuthenticated) {
      //   navigate('/menu')
      // } else {
      //   navigate('/login')
      // }
      onHandleGoogle()
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
