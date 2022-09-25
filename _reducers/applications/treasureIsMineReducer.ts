import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface TreasureIsMineState {
  numX: number;
  numY: number;
  numBomb: number;
  bombContainer: Array<Array<number>>;
  isOpen: Array<Array<number>>;
}

const initialState: TreasureIsMineState = {
  numX: 5,
  numY: 5,
  numBomb: 3,
  bombContainer: [],
  isOpen: [],
};

export const TreasureIsMineSlice = createSlice({
  name: 'treasureIsMineReducer',
  initialState,
  reducers: {
    startGame: (state, action) => {
      state.bombContainer = action.payload.bombContainer;
      state.isOpen = action.payload.isOpen;
    },
    openBox: (state, action) => {
      const rowIdx = action.payload.rowIdx;
      const colIdx = action.payload.colIdx;
      state.isOpen[rowIdx][colIdx] = 1;
    },
  },
});

export const { startGame, openBox } = TreasureIsMineSlice.actions;

export const getTreasureIsMine = (state: RootState) => state.treasureIsMine;

export default TreasureIsMineSlice.reducer;
