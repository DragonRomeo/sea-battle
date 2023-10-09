import {createSlice} from "@reduxjs/toolkit";


export enum ShipType {
  OneDeck = 1,
  TwoDeck,
  ThreeDeck,
  FourDeck
}

export interface Cell {
  row: number;
  column: number;
}

export interface ShipCell extends Cell {
  isHit: boolean;
  isTemporary: boolean;
}

export enum ShipOrientation {
  Horizontal,
  Vertical
}

export interface Ship {
  type: ShipType;
  orientation: ShipOrientation;
  deckState: Array<boolean>;
}

export interface FieldState {
  ships: Array<Ship>;
  draggedShip: Ship | null;
}

const initialState: FieldState = {
  ships: [],
  draggedShip: null
}

export const fieldSlice = createSlice({
  name: 'field',
  initialState,
  reducers: {
    setDruggedShip: (state, action) => {
      state.draggedShip = action.payload
    }
    // setShootUntilMiss: (state) => {
    //   state.mode = GameMode.ShootUntilMiss
    // },
    // setTurnByTurn: (state) => {
    //   state.mode = GameMode.TurnByTurn
    // },
  },
})

// Action creators are generated for each case reducer function
export const { setDruggedShip } = fieldSlice.actions

export default fieldSlice.reducer // This is how I did it