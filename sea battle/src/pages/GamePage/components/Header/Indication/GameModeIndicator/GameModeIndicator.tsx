import { useState } from 'react';
import type { FC } from 'react';

interface Props {
  className: string;
  h5: string;
}

export const GameModeIndicator: FC<Props> = ({ className, h5 }) => {
  const [gameMode] = useState(localStorage.gamemode);
  return (
    <div className={className}>
      <h5 className={h5}>Режим игры</h5>
      <p>{gameMode}</p>
    </div>
  );
};
