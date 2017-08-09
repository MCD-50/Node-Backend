import React from 'react';
import { Route, Switch } from 'react-router-dom'

import App from '../component/app';
import Splash from '../component/ui/splash';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default (
	<MuiThemeProvider>
		<App>
			<Switch>
				<Route exact path="/" component={Splash} />
			</Switch>
		</App>
	</MuiThemeProvider>
);