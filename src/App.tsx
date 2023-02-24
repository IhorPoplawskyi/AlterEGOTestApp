import { FC } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { NewsPage } from './pages/NewsPage/NewsPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';

export const App: FC = (): JSX.Element => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='*' element={<Navigate to='/'/>}/>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/news' element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
