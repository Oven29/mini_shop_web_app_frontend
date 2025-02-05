import { Route, Routes } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import StatusWrapper from './components/StatusWrapper';
import { useAuth } from './context/AuthContext';
import { useEffect } from 'react';
import { setAuthHeader } from './services/api';

export default function App() {
  const WebApp = window.Telegram.WebApp;

  WebApp.expand();

  const { isLoading, token } = useAuth();

  useEffect(() => {
    if (token) {
      console.log('auth token', token);
      setAuthHeader(token);
    }
  }, [token])

  return (
    <StatusWrapper isLoading={isLoading}>
      <Routes>
        <Route path='/category/:id' element={<CategoryPage />} key='category' />
      </Routes>
    </StatusWrapper>
  )
}
