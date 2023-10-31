// import { Theme } from '@radix-ui/themes';
import { AnimatePresence } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import LayoutInit from './components/LayoutInit'
import ProtectedRoute from './components/ProtectedRoute'
import Game from './pages/Game'
import Init from './pages/Init'
import Login from './pages/Login'
import Menu from './pages/Menu'

const App = () => {
  return (
    <AnimatePresence mode='wait'>
      <Routes>
        <Route
          path='/'
          element={
            <LayoutInit>
              <Init />
            </LayoutInit>
          }
        />
        <Route
          path='/menu' element={
            <LayoutInit>
              <Menu />
            </LayoutInit>
          }
        />
        <Route
          path='/login' element={
            <LayoutInit>
              <Login />
            </LayoutInit>
        }
        />
        <Route path='*' element={<h1>Not Found</h1>} />
        <Route
          path='/i'
          element={
            <ProtectedRoute>
              <Game />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default App
