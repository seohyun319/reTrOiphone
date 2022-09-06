import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface TreasureIsMineState {
  isOpen: Array<Array<number>>;
}

const initialState: TreasureIsMineState = {
  isOpen: [],
};

export const TreasureIsMineSlice = createSlice({
  name: 'treasureIsMineReducer',
  initialState,
  reducers: {
    openBox: (state, action) => {
      const rowIdx = action.payload.rowIdx;
      const boxIdx = action.payload.boxIdx;
      state.isOpen[rowIdx][boxIdx] = 1;
    },
  },
});

export const { openBox } = TreasureIsMineSlice.actions;

export const getTreasureIsMine = (state: RootState) => state.treasureIsMine;

export default TreasureIsMineSlice.reducer;
