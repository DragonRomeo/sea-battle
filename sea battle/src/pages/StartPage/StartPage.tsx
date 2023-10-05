import { useState } from 'react';
import type { FC } from 'react';
import styles from './StartPage.module.css';
import { Name } from './components/Name/Name';
import { GameMode } from './components/GameMode/GameMode';
import { ChangeEvent } from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import { TestPage } from './TestPage';
import { GamePage } from '../GamePage/GamePage';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';

GamePage;
TestPage;

interface Props {
  className?: string;
  children?: JSX.Element;
}

export const StartPage: FC<Props> = () => {
  const [value, setValue] = useState('1');

  return (
    <div className={styles.page}>
      <div className={styles.mainContainer}>
        <Name text='Введите ваше имя'></Name>
        <GameMode
          heading='Выберите режим'
          firstMode='Стрельба строго по очереди'
          secondMode='Стрельба до промаха'
          checked={value === '1' ? true : false}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setValue(event.target.value)
          }
          value={value}
        ></GameMode>

        <button className={styles.button}>
          <Link to='/GamePage'>NextPage</Link>
        </button>

        <Routes>
          <Route path='/GamePage' element={<GamePage />} />
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};
