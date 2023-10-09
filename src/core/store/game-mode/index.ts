import {createSlice} from '@reduxjs/toolkit'

export enum GameMode {
  ShootUntilMiss,
  TurnByTurn
}

// https://blog.logrocket.com/iterate-over-enums-typescript/#:~:text=The%20simplest%20way%20to%20iterate,the%20latter%20returns%20the%20values.
export const GameModeOptions = Object.keys(GameMode).filter((key) => isNaN(Number(key))) as Array<keyof typeof GameMode>;

export const mapModeToDescription = (mode: GameMode) => {
  switch (mode) {
    case GameMode.TurnByTurn:
      return 'Стрельба строго по очереди';
    case GameMode.ShootUntilMiss:
      return 'Стрельба до промаха';
  }
}


export interface GameModeState {
  name: string;
  mode: GameMode;
  options: Array<keyof typeof GameMode>;
}

const initialState: GameModeState = {
  name: '',
  mode: GameMode.ShootUntilMiss,
  options: Object.keys(GameMode).filter((key) => isNaN(Number(key))) as Array<keyof typeof GameMode>
}

export const gameModeSlice = createSlice({
  name: 'gameMode',
  initialState,
  reducers: {
    setShootUntilMiss: (state) => {
      state.mode = GameMode.ShootUntilMiss
    },
    setTurnByTurn: (state) => {
      state.mode = GameMode.TurnByTurn
    },
  },
})

// Action creators are generated for each case reducer function
export const { setShootUntilMiss, setTurnByTurn } = gameModeSlice.actions

export default gameModeSlice.reducer // This is how I did it
