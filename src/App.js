import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Show from './pages/Show/Show.js';
import Create from './pages/Create/Create.js';
// import Edit from './pages/Edit/Edit.js';
import './App.css';
const axios = require('axios');

class App extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			characters: null
		};
		this.newCharacter = this.newCharacter.bind(this);
		this.fetchAll = this.fetchAll.bind(this);
		this.delete = this.delete.bind(this);
	}

	fetchAll() {
		console.log('App: fetchAll');
		axios.get('http://dnd-characters-api.herokuapp.com/characters/').then((res) => {
			this.setState({ characters: res.data });
		});
	}

	newCharacter(input) {
		console.log('App: newCharacter');
		input.hitPoints.max = input.ability.con + input.hitDie;
		input.hitPoints.cur = input.hitPoints.max;
		axios
			.post('http://dnd-characters-api.herokuapp.com/characters/', input)
			.then((res) => {
				console.log(res);
			})
			.then(() => {
				this.fetchAll();
			});
	}

	delete(id) {
		axios.delete(`http://dnd-characters-api.herokuapp.com/characters/${id}`).then(() => {
			this.fetchAll();
		});
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
								return <Dashboard {...this.state} delete={this.delete} />;
							}}
						/>
						<Route
							exact
							path="/:id/show"
							render={(routerProps) => {
								return <Show {...this.state} {...routerProps} delete={this.delete} />;
							}}
						/>
						<Route
							exact
							path="/new"
							render={() => {
								return <Create newCharacter={this.newCharacter} />;
							}}
						/>
						{/* <Route
							exact
							path="/:id/edit"
							render={(routerProps) => {
								return <Edit {...this.state} {...routerProps} />;
							}}
						/> */}
					</Switch>
				</main>
			</div>
		);
	}

	componentDidMount() {
		console.log('App: componentDidMount');
		this.fetchAll();
	}
}

export default App;
