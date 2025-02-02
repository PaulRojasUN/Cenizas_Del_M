import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import '../css/layout-init.css'

const LayoutInit = ({ children }) => {
  return (

    <motion.div exit={{ opacity: 0 }} className='relative '>
      <div className='background-image' />
      <div className='absolute inset-0 flex flex-col items-center z-0 '>
        <h1 className='text-novel text-8xl font-bold text-black mt-10 mb-auto uppercase'>
          Cenizas del Mañana
        </h1>
        {children}
      </div>
    </motion.div>
  )
}

LayoutInit.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutInit
