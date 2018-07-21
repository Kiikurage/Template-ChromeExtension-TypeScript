import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { OptionsPageRoot } from './components/OptionsPageRoot/OptionsPageRoot';

window.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<OptionsPageRoot/>,
		document.getElementById('root')
	);
});
