import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Grid,
	IconButton,
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useHistory } from 'react-router-dom';

interface GameCardProps {
	title: string;
	thumbnail?: string;
	path: string;
}

const GameCard = ({ title, thumbnail, path }: GameCardProps) => {
	const history = useHistory();
	return (
		<Grid item>
			<Card style={{ width: '300px' }}>
				<CardActionArea onClick={() => history.push(path)}>
					<CardHeader title={title} />
					<CardContent>
						<CardMedia component='img' alt={title} height='140' image={thumbnail} title={title}></CardMedia>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<IconButton style={{ marginLeft: 'auto' }} onClick={() => history.push(path)}>
						<PlayArrowIcon />
					</IconButton>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default GameCard;
