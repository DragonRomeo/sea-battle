import style from './Ship.module.css';
import type { FC } from 'react';
import { useState } from 'react';

interface Props {
  className: string;
}
export const Ship: FC<Props> = ({ className }) => {
  const [rotate, setRotate] = useState(false);

  const styleRotate = {
    transform: rotate ? 'rotate(90deg)' : '',
    transition: 'transform 150ms ease',
  };

  return (
    <>
      <div
        className={`${style.ship} ${className}`}
        style={styleRotate}
        onClick={() => setRotate(!rotate)}
      >
        Ship
      </div>
    </>
  );
};
