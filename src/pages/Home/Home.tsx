import { Grid } from '@material-ui/core';
import { SIMON } from '../../routes';
import GameCard from './GameCard';

const Home = () => {
	return (
		<Grid container spacing={2}>
			<GameCard title={SIMON.display} thumbnail={SIMON.thumbnail} path={SIMON.path} />
		</Grid>
	);
};

export default Home;
