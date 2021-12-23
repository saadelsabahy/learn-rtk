import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBreedType } from '../../types';

export const dogsApi = createApi({
	reducerPath: 'dogsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_BASE_URL}`,
		prepareHeaders: (headers) => {
			headers.set('x-api-key', `${import.meta.env.VITE_API_KEY}`);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		fetchDogsBreed: builder.query<IBreedType[], number | void>({
			query: (limit = 10) => `breeds?limit=${limit}`,
		}),
	}),
});

export const { useFetchDogsBreedQuery } = dogsApi;
