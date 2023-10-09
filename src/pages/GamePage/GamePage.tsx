import type { FC } from 'react';
import { Header } from './components/Header/Header.tsx';
// import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main.tsx';
import styles from './GamePage.module.css';

export const GamePage: FC = () => {
  return (
    <div className={styles.gamePage}>
      <div className={styles.gameApp}>
        <Header />
        <Main />
        {/* <Footer /> */}
      </div>
    </div>
  );
};
