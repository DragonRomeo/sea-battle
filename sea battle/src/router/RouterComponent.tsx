import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GamePage } from '../pages/GamePage/GamePage';

export const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<GamePage />} />
      </Routes>
    </Router>
  );
};
