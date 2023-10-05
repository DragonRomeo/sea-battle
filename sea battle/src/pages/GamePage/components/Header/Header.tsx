import { GameModeIndicator } from './Indication/GameModeIndicator/GameModeIndicator';
import { PlayerName } from './Indication/PlayerName/PlayerName';
import { Score } from './Indication/Score/Score';
import style from './Header.module.css';

export const Header = () => {
  return (
    <div className={style.header}>
      <PlayerName></PlayerName>
      <GameModeIndicator></GameModeIndicator>
      <Score></Score>
    </div>
  );
};
