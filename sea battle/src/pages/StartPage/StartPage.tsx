import { useState } from 'react';
import type { FC } from 'react';
import styles from './StartPage.module.css';
import { Name } from './components/Name/Name';
import { GameMode } from './components/GameMode/GameMode';
import { ChangeEvent } from 'react';

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
        <button className={styles.button}>Готово!</button>
      </div>
    </div>
  );
};
