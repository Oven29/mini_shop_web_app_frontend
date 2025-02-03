import { Link, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import { getLength } from './utils/utils';
import CategoryPage from './pages/CategoryPage';
import StatusWrapper from './components/ui/StatusWrapper';

export default function App() {
  const WebApp = window.Telegram.WebApp;

  if (!getLength(WebApp.initDataUnsafe)) {
    return <ErrorPage title='Error' message='Please use telegram bot to enter app' />
  }

  WebApp.expand();

  return (
    <StatusWrapper isLoading={false}>
      <p>
        <Link to={'/category/1'}>12312321321</Link>
      </p>
      <Routes>
        <Route path='/category/:id' element={<CategoryPage />} key='category' />
      </Routes>
    </StatusWrapper>
  )
}
