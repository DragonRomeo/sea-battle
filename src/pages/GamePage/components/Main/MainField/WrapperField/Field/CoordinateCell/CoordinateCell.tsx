import type { FC } from 'react';
import style from './CoordinateCell.module.css';

interface Props {
  value: string;
}

export const CoordinateCell: FC<Props> = ({ value }) => {
  return <div className={style.cell}>{value}</div>;
};
