import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Show from './pages/Show/Show.js';
import Create from './pages/Create/Create.js';
import Edit from './pages/Edit/Edit.js';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}
	render() {
		return (
			<div className="App">
				<Header />
				<main>
					<Switch>
						<Route
							exact
							path="/"
							render={() => {
								return <Dashboard />;
							}}
						/>
						<Route
							exact
							path="/:id/show"
							render={() => {
								return <Show />;
							}}
						/>
						<Route
							exact
							path="/new"
							render={() => {
								return <Create />;
							}}
						/>
						<Route
							exact
							path="/:id/edit"
							render={() => {
								return <Edit />;
							}}
						/>
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
