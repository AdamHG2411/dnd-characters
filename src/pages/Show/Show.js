import React, { Component } from 'react';
import axios from 'axios';

class Show extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			character: null
		};
	}

	render() {
		console.log('Show: render');
		let content;
		if (this.state.character) {
			let character = this.state.character;
			content = (
				<div>
					<h2>{character.name}</h2>
					<h3>
						Level {character.level} {character.race} {character.class}
					</h3>
					<p>{character.alignment}</p>
					<p>{character.background}</p>
					<p />
				</div>
			);
		} else {
			content = <p>Loading...</p>;
		}
		return content;
	}

	componentDidMount() {
		console.log('Show: componentDidMount');
		axios.get(`http://localhost:3001/characters/${this.props.match.params.id}/`).then((res) => {
			this.setState({ character: res.data });
		});
		// this.setState({ character });
	}
}

export default Show;
