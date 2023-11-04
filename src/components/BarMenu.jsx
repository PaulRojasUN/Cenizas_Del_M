import { useNavigate } from 'react-router-dom'

const BarMenu = () => {
  const navigate = useNavigate()

  const onHandleBarMenu = () => {
    navigate('/menu')
  }

  return (
    <div
      onClick={() => onHandleBarMenu()}
      className='flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 absolute p-2 menuBar z-10 nes-pointer'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 32 32'
      >
        <path
          fill='none'
          stroke='#ffffff'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='2'
          d='M4 8h24M4 16h24M4 24h24'
        />
      </svg>
    </div>
  )
}

export default BarMenu
