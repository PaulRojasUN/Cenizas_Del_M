// import { Theme } from '@radix-ui/themes';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Login/>
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <h1>Not Found</h1>
          </Layout>
        }
      />
      <Route
        path="/i"
        element={
          <ProtectedRoute>
            <Layout>
              {' '}
              <Dashboard />{' '}
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
