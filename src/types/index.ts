export interface ICounterStateType {
	counter: number;
}

export interface IBreedType {
	name: string;
	id: string;
	image: {
		url: string;
	};
}

export type fetchDogsStatus = 'LOADING' | 'SUCCESS' | 'ERROR';
export interface IDogsInitialState {
	breeds: IBreedType[];
	getDogsStatus: fetchDogsStatus;
	errorMessage: string;
}
