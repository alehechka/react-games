import { AppBar, Button, CssBaseline, Link, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './LayoutStyles';
import { Link as NavLink } from 'react-router-dom';
import { HOME } from '../routes';

const Navbar = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed'>
				<NoAuthToolbar />
			</AppBar>
		</div>
	);
};

const NoAuthToolbar = () => {
	return (
		<Toolbar>
			<Header />
		</Toolbar>
	);
};

const Header = ({ xsDown }: { xsDown?: boolean }) => {
	const classes = useStyles();
	return (
		<>
			<Typography variant='h5' className={classes.title} noWrap>
				<Link component={NavLink} to={HOME.path}>
					<Button>{!xsDown && <Typography variant='h5'>React Games</Typography>}</Button>
				</Link>
			</Typography>
		</>
	);
};

export default Navbar;
