import type { FC } from 'react';
import styles from './GameMode.module.css';
import { ChangeEvent } from 'react';

interface Props {
  heading: string;
  firstMode: string;
  secondMode: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const GameMode: FC<Props> = ({
  heading,
  firstMode,
  secondMode,
  checked,
  onChange,
  value,
}) => {
  return (
    <>
      <div className={styles.choiceMode}>
        <h4 className={styles.choiceName}>{heading}</h4>

        <div className={styles.choiceItem}>
          <input
            type='radio'
            name='choice'
            value='Стрельба строго по очереди'
            checked={checked}
            onChange={onChange}
          ></input>
          <p className={styles.text}>{firstMode}</p>
        </div>

        <div className={styles.choiceItem}>
          <input
            type='radio'
            name='choice'
            value='Стрельба до промаха'
            checked={value === 'Стрельба до промаха' ? true : false}
            onChange={onChange}
          ></input>
          <p className={styles.text}>{secondMode}</p>
        </div>
      </div>
    </>
  );
};
