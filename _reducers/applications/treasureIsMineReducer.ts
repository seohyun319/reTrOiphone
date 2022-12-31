import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface TreasureIsMineState {
  numX: number;
  numY: number;
  bombNum: number;
  bombContainer: Array<Array<number>>;
  isOpen: Array<Array<number>>;
}

const initialState: TreasureIsMineState = {
  numX: 5,
  numY: 5,
  bombNum: 3,
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
    selectMode: (state, action) => {
      state.numX = action.payload.numX;
      state.numY = action.payload.numY;
    },
    openBox: (state, action) => {
      const rowIdx = action.payload.rowIdx;
      const colIdx = action.payload.colIdx;
      state.isOpen[rowIdx][colIdx] = 1;
    },
  },
});

export const { startGame, selectMode, openBox } = TreasureIsMineSlice.actions;

export const getTreasureIsMine = (state: RootState) => state.treasureIsMine;

export default TreasureIsMineSlice.reducer;
