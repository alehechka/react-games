import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SIMON, HOME } from './routes';
import { useStyles } from './layouts/LayoutStyles';
import Navbar from './layouts/Navbar';

function App() {
	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: 'dark', // 'light',
				},
			}),
		[]
	);
	const styles = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Navbar />

			<CssBaseline />
			<main className={styles.content}>
				<div className={styles.drawerHeader} />
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact {...HOME} />
						<Route exact {...SIMON} />
						<Route path='' component={() => <Redirect to={HOME.path} />} />
					</Switch>
				</Suspense>
			</main>
		</ThemeProvider>
	);
}

export default App;
