import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PopupPageRoot } from './components/PopupPageRoot/PopupPageRoot';

window.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<PopupPageRoot/>,
		document.getElementById('root')
	);
});
