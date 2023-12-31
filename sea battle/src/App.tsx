import type { FC } from 'react';
import { StartPage } from './pages/StartPage/StartPage';
import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { GamePage } from './pages/GamePage/GamePage';
import './assets/styles/global.css'

export const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<StartPage />} />
      <Route path='/game' element={<GamePage />} />
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
  );
};
