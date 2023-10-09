import { useState } from 'react';
import type { FC } from 'react';

interface Props {
  className: string;
  h5: string;
}

export const PlayerName: FC<Props>  = ({className, h5}) => {
  const [name] = useState(localStorage.nickname);

  return (
    <div className={className}>
      <h5 className={h5}>Имя игрока</h5>
      <p>{name}</p>
    </div>
  );
};
