import React from 'react';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RoutesVN from './routes/RoutesVN';
import { AuthProvider } from './context/AuthContext';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <Theme>
            <RoutesVN/>
        </Theme>
    </AuthProvider>
  </React.StrictMode>
);
