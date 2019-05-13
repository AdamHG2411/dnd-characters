import React, { Component } from 'react';
const axios = require('axios');

class Dashboard extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			characters: null
		};
	}

	render() {
		console.log('Dashboard: render');
		let characterCards = [];
		if (this.state.characters) {
			console.log(this.state.characters);
			characterCards = this.state.characters.data.map((character) => {
				return (
					<div className="Character-Card">
						<h2 className="Character-Name">{character.name}</h2>
						<p className="Character-Desc">
							<em>
								{character.race} {character.class} (lvl. {character.level})
							</em>
						</p>
					</div>
				);
			});
		} else {
			characterCards = <p>Loading...</p>;
		}
		return <div>{characterCards}</div>;
	}

	componentDidMount() {
		console.log('Dashboard: componentDidMount');
		axios.get('http://localhost:3001/characters').then((res) => {
			console.log(res);
			this.setState({ characters: res });
		});
	}
}

export default Dashboard;
