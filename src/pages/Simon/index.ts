import { lazy } from 'react';
const AsyncSimon = lazy(() => import('./Simon'));
export { AsyncSimon as Simon };

export default AsyncSimon;
