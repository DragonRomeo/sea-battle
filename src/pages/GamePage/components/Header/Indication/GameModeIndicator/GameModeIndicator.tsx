import type {FC} from 'react';
import {useSelector} from "react-redux";

import {mapModeToDescription} from "../../../../../../core/store/game-mode";
import {RootState} from "../../../../../../core/store/store.ts";

interface Props {
  className: string;
  h5: string;
}

export const GameModeIndicator: FC<Props> = ({className, h5}) => {
  const gameMode = useSelector((state: RootState) => state.gameMode.mode);
  return (
    <div className={className}>
      <h5 className={h5}>Режим игры</h5>
      <p>{mapModeToDescription(gameMode)}</p>
    </div>
  );
};
