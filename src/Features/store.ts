import { configureStore } from '@reduxjs/toolkit';
import dogReducer from '../Features/Dogs/Dogs.slice';
import counterSlice from './Counter/counter.slice';
import { dogsApi } from './Dogs/Dogs.apis';
export const store = configureStore({
	reducer: {
		counterSlice,
		[dogsApi.reducerPath]: dogsApi.reducer,
		dogReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(dogsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
