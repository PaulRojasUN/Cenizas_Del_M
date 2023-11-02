import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginWithGoogle } from '../api/auth'
import { useKeyboard } from '../hooks/useKeyboard'
import { useAuthStore } from '../store/auth'

const Init = () => {
  const navigate = useNavigate()
  const { continueKey } = useKeyboard()
  const [isAuthenticated] = useAuthStore((state) => [
    state.isAuthenticated
  ])

  const onHandleGoogle = async () => {
    const result = await loginWithGoogle()
    console.log(result)
    console.log(result.type)
    if (result.type === 'success') {
      navigate('/menu')
    } else {
      console.log('Error')
      navigate('/')
    }
  }

  useEffect(() => {
    if (continueKey) {
      if (isAuthenticated) {
        navigate('/menu')
      } else {
        console.log('siuu')
        onHandleGoogle()
      }
    }
  }, [continueKey])

  return (
    <span className='text-novel text-4xl font-bold text-black uppercase'>
      Presione ENTER para continuar
    </span>
  )
}

export default Init
