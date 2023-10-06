import type { FC } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';

export const GamePage: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
