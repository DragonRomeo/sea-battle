import { GameModeIndicator } from './GameModeIndicator/GameModeIndicator';
import { PlayerName } from './PlayerName/PlayerName';
import { Score } from './Score/Score';
import style from './Indication.module.css';

export const Indication = () => {
  return (
    <div className={style.container}>
      <GameModeIndicator></GameModeIndicator>
      <PlayerName></PlayerName>
      <Score></Score>
    </div>
  );
};
