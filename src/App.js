/**
* Main App
*/
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';

// css
import './lib/reactifyCss';

// firebase
import './firebase';

// app component
import App from './container/App';

import { configureStore } from './store';
//new change dev2ffsdfsdfd
const MainApp = () => (
	<Provider store={configureStore()}>
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<Router>
				<Switch>
					<Route path="/" component={App} />
				</Switch>
			</Router>
		</MuiPickersUtilsProvider>
	</Provider>
);
//ok
export default MainApp;
