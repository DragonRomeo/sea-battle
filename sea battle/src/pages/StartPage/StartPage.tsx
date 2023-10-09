import { useState } from 'react';
import type { FC } from 'react';
import styles from './StartPage.module.css';
import { Name } from './components/Name/Name';
import { GameMode } from './components/GameMode/GameMode';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
  children?: JSX.Element;
}

export const StartPage: FC<Props> = () => {
  const [value, setValue] = useState('Стрельба строго по очереди');
  const [nickname, setNickname] = useState('');

  const navigate = useNavigate();

  const goingNextPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (nickname) {
      localStorage.nickname = nickname;
      localStorage.gamemode = value;
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
        <GameMode
          heading='Выберите режим'
          firstMode='Стрельба строго по очереди'
          secondMode='Стрельба до промаха'
          checked={value === 'Стрельба строго по очереди' ? true : false}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value);
          }}
          value={value}
        ></GameMode>

        <button className={styles.button} onClick={goingNextPage}>Принять</button>
      </div>
    </div>
  );
};
