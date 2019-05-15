import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.clickDelete = this.clickDelete.bind(this);
	}

	clickDelete(evt) {
		console.log(`deleting ${evt.target.value}`);
		this.props.delete(evt.target.value);
	}

	render() {
		console.log('Dashboard: render');
		let characterCards = [];
		if (this.props.characters) {
			console.log(this.props.characters);
			characterCards = this.props.characters.sort((a, b) => (a.name > b.name ? 1 : -1)).map((character, i) => {
				return (
					<div className="Character-Card" key={i}>
						<h2 className="Character-Name">{character.name}</h2>
						<p className="Character-Desc">
							<em>
								{character.race} {character.class} (lvl. {character.level})
							</em>
						</p>
						<div className="Character-Buttons">
							<Link to={`/${character._id}/show`}>
								<button className="Character-Show">Show</button>
							</Link>
							{/* <Link to={`/${character._id}/edit`}>
								<button className="Character-Edit">Edit</button>
							</Link> */}
							<button className="Character-Delete" onClick={this.clickDelete} value={character._id}>
								Delete
							</button>
						</div>
					</div>
				);
			});
		} else {
			characterCards = <p>Loading...</p>;
		}
		return <div className="Dashboard-Characters">{characterCards}</div>;
	}
}

export default Dashboard;
