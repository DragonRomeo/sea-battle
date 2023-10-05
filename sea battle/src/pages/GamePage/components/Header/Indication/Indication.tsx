import { GameModeIndicator } from './GameModeIndicator/GameModeIndicator';
import { PlayerName } from './PlayerName/PlayerName';
import { Score } from './Score/Score';



export const Indication = () => {
  return (
    <>
      <GameModeIndicator></GameModeIndicator>
      <PlayerName></PlayerName>
      <Score></Score>
    </>
  );
};
