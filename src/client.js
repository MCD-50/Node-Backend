
import React from 'react';
import { render } from 'react-dom';
import { createHashHistory } from 'history';
import { Router } from 'react-router-dom'

//get react routes
import route from './react/route';
import injectTapEventPlugin from 'react-tap-event-plugin';

window.onload = () => {
	injectTapEventPlugin();
	render(
		<Router history={createHashHistory()}>
			{route}
		</Router>,
		document.getElementById('app'))
}