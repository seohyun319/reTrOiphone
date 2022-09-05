import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface TreasureIsMineState {}

const initialState: TreasureIsMineState = {};

export const TreasureIsMineSlice = createSlice({
  name: 'treasureIsMineReducer',
  initialState,
  reducers: {},
});

export const {} = TreasureIsMineSlice.actions;

export const getTreasureIsMine = (state: RootState) => state.treasureIsMine;

export default TreasureIsMineSlice.reducer;
