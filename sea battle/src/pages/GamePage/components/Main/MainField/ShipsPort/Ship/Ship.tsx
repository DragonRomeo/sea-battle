import style from './Ship.module.css';
import { FC } from 'react';

interface Props {
  className: string;
}
export const Ship: FC<Props> = ({ className }) => {
  return (
    <>
      <div className={`${style.ship} ${className}`}>Ship</div>
      
    </>
  );
};
