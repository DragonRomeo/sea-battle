import style from './Cell.module.css';
import { FC } from 'react';

interface Props {
  id?: string;
}

export const Cell: FC<Props> = ({id}) => {
  return <div className={style.cell} id={id} onClick={() => console.log(id)}></div>;
};
