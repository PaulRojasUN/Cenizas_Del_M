import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './css/index.css'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <Theme>
        <App />
      </Theme>
    </AuthProvider>
  </BrowserRouter>
)
