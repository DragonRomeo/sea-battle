import type {FC} from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';

import {
  GameMode,
  GameModeOptions,
  mapModeToDescription,
  setShootUntilMiss,
  setTurnByTurn
} from "../../core/store/game-mode";
import {RootState} from "../../core/store/store.ts";
import {RadioInput} from './components/GameMode/GameMode.tsx';
import {Name} from './components/Name/Name.tsx';
import styles from './StartPage.module.css';

interface Props {
  className?: string;
  children?: JSX.Element;
}

export const StartPage: FC<Props> = () => {
  const gameMode = useSelector((state: RootState) => state.gameMode.mode);
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('');

  const navigate = useNavigate();

  const goingNextPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (nickname) {
      localStorage.nickname = nickname;
      navigate('/game');
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.mainContainer}>
        <Name
          text='Введите ваше имя'
          name='nickname'
          id='nickname'
          onChange={(event) => setNickname(event.target.value)}
        ></Name>
        <div className={styles.choiceMode}>
          <h4 className={styles.choiceName}>Выберите режим</h4>
          {
            GameModeOptions.map((mode, index) => (
              <RadioInput key={index} value={GameMode[mode]} checked={gameMode === GameMode[mode]}
                          onChange={(value) => {
                            switch (value) {
                              case GameMode.ShootUntilMiss:
                                dispatch(setShootUntilMiss())
                                break;
                              case GameMode.TurnByTurn:
                                dispatch(setTurnByTurn());
                                break;
                            }
                          }}>
                {mapModeToDescription(GameMode[mode])}
              </RadioInput>
            ))
          }
        </div>
        <button className={styles.button} onClick={goingNextPage}>Принять</button>
      </div>
    </div>
  );
};
