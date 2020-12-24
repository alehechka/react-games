import { Simon, Home } from '../pages';

export interface Route {
	path: string;
	display: string;
	icon?: any;
	description?: string;
	component?: any;
	thumbnail?: string;
}

export const SIMON: Route = {
	path: '/simon',
	display: 'Simon',
	component: Simon,
	description:
		'Simon is an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison, working for toy design firm Marvin Glass and Associates, with software programming by Lenny Cope. The device creates a series of tones and lights and requires a user to repeat the sequence.',
	thumbnail: '/react-games/assets/simon.jpg',
};

export const HOME: Route = {
	path: '/home',
	display: 'Home',
	component: Home,
};
