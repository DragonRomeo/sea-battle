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
        <p>{heading}</p>

        <div className={styles.choiceItem}>
          <input
            type='radio'
            name='choice'
            value='1'
            checked={checked}
            onChange={onChange}
          ></input>
          <p>{firstMode}</p>
        </div>

        <div className={styles.choiceItem}>
          <input
            type='radio'
            name='choice'
            value='2'
            checked={value === '2' ? true : false}
            onChange={onChange}
          ></input>
          <p>{secondMode}</p>
        </div>
      </div>
    </>
  );
};
