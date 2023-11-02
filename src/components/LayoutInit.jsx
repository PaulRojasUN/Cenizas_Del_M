import PropTypes from 'prop-types'
import '../css/layout-init.css'

const LayoutInit = ({ children }) => {
  return (
    <div exit={{ opacity: 0 }} className='relative'>
      <div className='background-image' />
      <div className='absolute inset-0 flex flex-col items-center z-0'>
        <h1 className='text-novel text-8xl font-bold text-black mt-10 uppercase h-1/2'>
          Cenizas del Mañana
        </h1>
        <div className='h-1/2 flex flex-col items-center w-full'>
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
