import PropTypes from 'prop-types'
import '../css/layout-introduction.css'

const LayoutIntroduction = ({ children }) => {
  return (
    <div className='relative'>
      <div className='background-image' />
      <div className='absolute inset-0 grid grid-cols-1 justify-items-start items-center'>
        <div className='ml-20'>
          {children}
        </div>
      </div>
    </div>
  )
}

LayoutIntroduction.propTypes = {
  children: PropTypes.node.isRequired
}

export default LayoutIntroduction
