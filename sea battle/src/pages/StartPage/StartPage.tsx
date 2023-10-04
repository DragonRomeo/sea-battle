import { useState } from 'react';
import type { FC } from 'react';

import styles from './StartPage.module.css';

interface Props {
  className?: string;
  children?: JSX.Element;
}

export const StartPage: FC<Props> = () => {
  const [value, setValue] = useState('1');

  return (
    <div className={styles.page}>
      <div className={styles.mainContainer}>
        <p>Введите ваше имя</p>
        <input type='text' />
        <div className={styles.choiceMode}>
          <p>Выберите режим</p>

          <div className={styles.choiceItem}>
            <input
              type='radio'
              name='choice'
              value='1'
              checked={value === '1' ? true : false}
              onChange={(event) => setValue(event.target.value)}
            ></input>
            <p>Стрельба строго по очереди</p>
          </div>

          <div className={styles.choiceItem}>
            <input
              type='radio'
              name='choice'
              value='2'
              checked={value === '2' ? true : false}
              onChange={(event) => setValue(event.target.value)}
            ></input>
            <p>Стрельба до промаха</p>
          </div>
        </div>
        <button></button>
      </div>
    </div>
  );
};
