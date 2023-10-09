import { GameModeIndicator } from './GameModeIndicator/GameModeIndicator.tsx';
import { PlayerName } from './PlayerName/PlayerName.tsx';
import { Score } from './Score/Score.tsx';
import style from './Indication.module.css';

export const Indication = () => {
  return (
    <div className={style.container}>
      <GameModeIndicator className={style.indicator} h5={style.h5}></GameModeIndicator>
      <PlayerName className={style.indicator} h5={style.h5}></PlayerName>
      <Score className={style.indicator} h5={style.h5}></Score>
    </div>
  );
};
