import style from './Ship.module.css';
import type { FC } from 'react';
import { useState } from 'react';

interface Props {
  className: string;
}
export const Ship: FC<Props> = ({ className }) => {
  const [rotate, setRotate] = useState(false);
  // const;

  const styleRotate = {
    transform: rotate ? 'rotate(90deg)' : '',
    transition: 'transform 150ms ease',
  };
  const dragStartHandler = (e) => {
    console.log('drag');
  };

  const dragEndHandler = (e) => {
    // e.target.style.background = 'rgba(255, 234, 13, 0.5);';
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    console.log(`over here ${e}`)
    // e.target.style.background = 'lightgray';
  };

  const dropHandler = (e) => {
    e.preventDefault();
    console.log('drop');

    // e.target.style.background = 'rgba(255, 234, 13, 0.5);';
  };

  return (
    <>
      <div
        className={`${style.ship} ${className}`}
        style={styleRotate}
        onClick={() => setRotate(!rotate)}
        onDragStart={(e) => dragStartHandler(e)}
        onDragLeave={(e) => dragEndHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropHandler(e)}
        draggable={true}
      >
        Ship
      </div>
    </>
  );
};
