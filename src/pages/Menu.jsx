import { useNavigate } from 'react-router-dom'
import { logout } from '../api/auth'
import { InitialTransition } from '../components/design/InitialTransition'
import PixelButton from '../components/design/PixelButton'
import { useAuthStore } from '../store/auth'
import { useGameStore } from '../store/game'

const Menu = () => {
  const navigate = useNavigate()
  const [userLogged] = useAuthStore((state) => [
    state.userLogged
  ])
  const { reset } = useGameStore.getState()

  const handleLogout = async (e) => {
    e.preventDefault()
    const res = await logout()
    if (res && res.type === 'success') {
      navigate('/')
    }
  }

  const handleInitGame = async (e) => {
    e.preventDefault()
    navigate('/game')
  }

  const handleReset = async (e) => {
    e.preventDefault()
    reset()
    const modal = document.getElementById('dialog-dark-rounded')
    if (modal) {
      modal.close()
    }
  }

  const openModal = () => {
    const modal = document.getElementById('dialog-dark-rounded')
    if (modal) {
      modal.showModal()
    }
  }

  return (
    <>
      <InitialTransition />

      <div className='bg-white bg-opacity-50 rounded-lg p-4 '>
        <h2 className='font-pixelcraft text-4xl font-bold text-black uppercase'>
          Logged-in as {userLogged.name}
        </h2>
      </div>

      <div className='flex flex-col items-center justify-center mt-14 gap-0'>
        <PixelButton
          text='Iniciar juego'
          font='font-pixelcraft'
          handleFunction={handleInitGame}
        />
        <PixelButton
          text='Reiniciar Juego'
          font='font-pixelcraft'
          handleFunction={openModal}
        />
        <dialog className='nes-dialog is-dark is-rounded font-pixelcraft text-2xl' id='dialog-dark-rounded'>
          <form method='dialog'>
            <div className='max-w-md'>
              <p className='title'>Reiniciar el juego hará que pierdas tu progreso, ¿estas seguro?</p>
            </div>
            <menu className='dialog-menu mt-5 flex justify-center gap-5'>
              <button className='nes-btn'>Cancel</button>
              <button className='nes-btn is-primary' onClick={(e) => handleReset(e)}>Confirm</button>
            </menu>
          </form>
        </dialog>
        <PixelButton text='Controles' font='font-pixelcraft' />
        <PixelButton
          text='Salir'
          font='font-pixelcraft'
          handleFunction={handleLogout}
        />
      </div>
    </>
  )
}

export default Menu
