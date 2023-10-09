import { Cell } from './Cell/Cell.tsx';
import type { FC } from 'react';
import style from './Field.module.css';

interface Props {
  shipsReady?: boolean;
  isMyBoard?: boolean;
  isMyMove?: boolean;
  shoot?: () => void;
}

export const Field: FC<Props> = () => {
  // const row = new Array(10).fill(0);
  // const matrix = row.map(() => new Array(10).fill(0));

  const matrix: Array<Array<string>> = [];
  for (let i = 0; i < 10; i++) {
    const row: Array<string> = [];
    matrix.push(row);

    for (let j = 0; j < 10; j++) {
      row.push(`${i},${j}`);
    }
  }

  return (
    <div className={style.container}>
      {matrix.map((row, index) => (
        <div className={style.row} key={index}>
          {row.map((cell, index) => (
            <Cell key={index} id={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};
