import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addSpecificNumber, decrement, increment } from './counter.slice';

interface Props {}

const Counter = (props: Props) => {
	const counter = useAppSelector((state) => state.counterSlice.counter);
	const dispatch = useAppDispatch();

	const onIncrement = () => {
		dispatch(increment());
	};
	const onDecrement = () => {
		dispatch(decrement());
	};
	const onAddSpecificNumber = () => {
		dispatch(addSpecificNumber(5));
	};
	return (
		<div>
			{counter}
			<button onClick={onIncrement}>+</button>
			<button onClick={onDecrement}>-</button>
			<button onClick={onAddSpecificNumber}>add specific</button>
		</div>
	);
};

export default Counter;
