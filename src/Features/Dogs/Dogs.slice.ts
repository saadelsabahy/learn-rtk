import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IDogsInitialState } from '../../types';

const initialState: IDogsInitialState = {
	breeds: [],
	getDogsStatus: 'SUCCESS',
	errorMessage: '',
};

export const fetchBreeds = createAsyncThunk(
	'dogs/breads',
	async (limit: number, thunkApi) => {
		const breeds = await axios.get(
			`${import.meta.env.VITE_BASE_URL}/breeds?limit=${limit}`,
			{
				headers: { 'x-api-key': `${import.meta.env.VITE_BASE_URL}` },
			}
		);
		return breeds.data;
	}
);
export const dogReducer = createSlice({
	name: 'dogReducer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchBreeds.pending, (state, action) => {
			state.getDogsStatus = 'LOADING';
		}),
			builder.addCase(fetchBreeds.fulfilled, (state, action) => {
				state.breeds = action.payload;
				state.getDogsStatus = 'SUCCESS';
			}),
			builder.addCase(fetchBreeds.rejected, (state, action) => {
				state.errorMessage = action.error.message || '';
				state.getDogsStatus = 'ERROR';
			});
	},
});

export default dogReducer.reducer;
