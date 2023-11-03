// import { Theme } from '@radix-ui/themes';
import { AnimatePresence } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import LayoutInit from './components/LayoutInit'
import ProtectedRoute from './components/ProtectedRoute'
import Game from './pages/Game'
import Init from './pages/Init'
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
            <ProtectedRoute>
              <LayoutInit>
                <Menu />
              </LayoutInit>
            </ProtectedRoute>
          }
        />
        <Route
          path='/game' element={
            <ProtectedRoute>
              <Game />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
