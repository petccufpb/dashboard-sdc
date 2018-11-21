import React, { Component } from 'react';

import Login from './view/Login';
import App from './view/App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/index.css';

class Main extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route path="/" component={App} />
				</Switch>
			</Router>
		);
	}
}

export default Main;
