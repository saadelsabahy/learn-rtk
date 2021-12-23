import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useFetchDogsBreedQuery } from './Dogs.apis';
import { fetchBreeds } from './Dogs.slice';

interface Props {}

const DogsList = (props: Props) => {
	const [limit, setlimit] = useState<number>(10);
	// const { data, isLoading, isError, error } = useFetchDogsBreedQuery(limit);
	const changeLimit = (options: React.FormEvent<HTMLSelectElement>) => {
		setlimit(+options.currentTarget.value);
	};
	const getDogsStatus = useAppSelector(
		(state) => state.dogReducer.getDogsStatus
	);
	const data = useAppSelector((state) => state.dogReducer.breeds);
	const errorMessage = useAppSelector(
		(state) => state.dogReducer.errorMessage
	);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchBreeds(limit));
	}, [limit]);
	return (
		<div>
			{getDogsStatus == 'LOADING' && 'loading..'}
			{getDogsStatus === 'ERROR' && errorMessage}
			<select
				name='limit number'
				id='lim_select'
				onChange={changeLimit}
				value={limit}
			>
				<option value={5}>5</option>
				<option value={10}>10</option>
				<option value={15}>15</option>
				<option value={20}>20</option>
			</select>
			{data && `${data.length}`}
			{data &&
				data.map(({ name, id, image: { url } }) => {
					return (
						<figure key={id}>
							<img
								src={url}
								width={'300px'}
								height={'300px'}
								alt={name}
							/>
							<figcaption>{name}</figcaption>
						</figure>
					);
				})}
			{/* {isLoading && 'loading..'}
			{isError && error?.data && error?.data?.message}
			<select
				name='limit number'
				id='lim_select'
				onChange={changeLimit}
				value={limit}
			>
				<option value={5}>5</option>
				<option value={10}>10</option>
				<option value={15}>15</option>
				<option value={20}>20</option>
			</select>
			{data && `${data.length}`}
			{data &&
				data.map(({ name, id, image: { url } }) => {
					return (
						<figure key={id}>
							<img
								src={url}
								width={'300px'}
								height={'300px'}
								alt={name}
							/>
							<figcaption>{name}</figcaption>
						</figure>
					);
				})} */}
		</div>
	);
};

export default DogsList;
