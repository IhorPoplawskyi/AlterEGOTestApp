import { FC } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { NewsPage } from './pages/NewsPage/NewsPage';

export const App: FC = (): JSX.Element => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Navigate to='/' replace />}/>
        <Route path='/' element={''} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/profile' element={''} />
      </Routes>
      <Header />
      <NewsPage />
    </BrowserRouter>
  );
}
