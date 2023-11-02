import PropTypes from 'prop-types'
import '../css/layout-init.css'

const LayoutInit = ({ children }) => {
  return (
    <div className='relative'>
      <div className='background-image' />
      <div className='absolute inset-0 flex flex-col items-center z-0'>
        <div className='bg-white bg-opacity-50 rounded-lg p-4 mt-10 '>
          <h1 className='font-pixelcraft text-8xl font-bold text-black uppercase text-center'>
            Cenizas del Mañana
          </h1>
        </div>
        <div className='h-3/5 flex flex-col items-center justify-center'>
          {children}
        </div>
      </div>
    </div>
  )
}

LayoutInit.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutInit
