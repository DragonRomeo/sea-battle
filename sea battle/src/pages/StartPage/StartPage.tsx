import { useState } from 'react';
import type { FC } from 'react';
import styles from './StartPage.module.css';
import { Name } from './components/Name/Name';
import { GameMode } from './components/GameMode/GameMode';
import { ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  children?: JSX.Element;
}

export const StartPage: FC<Props> = () => {
  const [value, setValue] = useState('1');
  const [nickname, setNickname] = useState('');

  const navigate = useNavigate();

  const goingNextPage = (e) => {
    e.preventDefault();
    if (nickname) {
      localStorage.nickname = nickname;
      navigate('/game');
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.mainContainer}>
        <Name
          text='Введите ваше имя'
          name='nickname'
          id='nickname'
          onChange={(event) => setNickname(event.target.value)}
        ></Name>
        {/* <input
          type='text'
          name='nickname'
          id='nickname'
          onChange={(e) => setNickname(e.target.value)}
        /> */}
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

        <button onClick={goingNextPage} className={styles.button}>
          {/* <a onClick={goingNextPage}>NextPage</a> */}
        </button>
      </div>
    </div>
  );
};
