import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/auth'

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated] = useAuthStore((state) => [
    state.isAuthenticated
  ])

  if (!isAuthenticated) {
    return <Navigate to='/' />
  }

  return children
}

export default ProtectedRoute

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
}
