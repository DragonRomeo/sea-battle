import type { FC } from 'react';
import { Header } from './components/Header/Header';
// import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
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
