import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICounterStateType } from '../../types';

const initialState: ICounterStateType = { counter: 0 };
const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state /* action: PayloadAction<string> */) => {
			state.counter += 1;
		},
		decrement: (state /* action: PayloadAction<string> */) => {
			state.counter -= 1;
		},
		addSpecificNumber: (state, action: PayloadAction<number>) => {
			state.counter += action.payload;
		},
	},
});
export const { increment, decrement, addSpecificNumber } = counterSlice.actions;
export default counterSlice.reducer;
