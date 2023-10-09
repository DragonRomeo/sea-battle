import style from './Cell.module.css';
import { FC } from 'react';

interface Props {
  id?: string;
}

export const Cell: FC<Props> = ({ id }) => {
  const dragStartHandler = (e) => {
    console.log('drag');
  };

  const dragEndHandler = (e) => {
    // e.target.style.background = 'rgba(255, 234, 13, 0.5);';
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    console.log(`over here`, e);
    // e.target.style.background = 'lightgray';
  };

  const dropHandler = (e) => {
    e.preventDefault();
    console.log('drop');

    // e.target.style.background = 'rgba(255, 234, 13, 0.5);';
  };

  return (
    <div
      className={style.cell}
      id={id}
      onDragStart={(e) => dragStartHandler(e)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e)}
      onClick={() => console.log(id)}
    ></div>
  );
};
