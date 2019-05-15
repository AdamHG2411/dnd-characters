import React, { Component } from 'react';
import axios from 'axios';
import './Show.css';

class Show extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			character: null,
			hpChangeBy: 1
		};
		// this.hpAdd = this.hpAdd.bind(this);
		this.hpEdit = this.hpEdit.bind(this);
		this.hpHandleChange = this.hpHandleChange.bind(this);
		this.fetchThis = this.fetchThis.bind(this);
	}

	fetchThis() {
		axios.get(`http://localhost:3001/characters/${this.props.match.params.id}/`).then((res) => {
			this.setState({ character: res.data });
		});
	}

	hpEdit(evt) {
		evt.preventDefault();
		console.log('Show: subtract');
		let hpMod = this.state.hpChangeBy;
		if (evt.target.name === 'subtract') {
			hpMod = hpMod * -1;
		}
		let newHP = this.state.character.hitPoints.cur + hpMod;
		if (newHP > this.state.character.hitPoints.max) {
			newHP = this.state.character.hitPoints.max;
		} else if (newHP < 0) {
			newHP = 0;
		}
		axios
			.put(`http://localhost:3001/characters/${this.props.match.params.id}`, {
				hitPoints: {
					max: this.state.character.hitPoints.max,
					cur: newHP,
					temp: this.state.character.hitPoints.temp
				}
			})
			.then(() => {
				this.fetchThis();
			});
	}

	// hpAdd(evt) {
	// 	console.log('Show: add');
	// }

	hpHandleChange(evt) {
		console.log('Show: hpHandleChange');
		if (evt.target.value === '') {
			this.setState({ hpChangeBy: 1 });
		} else {
			this.setState({ hpChangeBy: Math.abs(evt.target.value) });
		}
	}

	render() {
		console.log('Show: render');
		let content;
		if (this.state.character) {
			let character = this.state.character;
			console.log(character);
			content = (
				<div className="Show">
					<h2>{character.name}</h2>
					<h3>
						Level {character.level} {character.race} {character.class}
					</h3>
					<p>{character.alignment}</p>
					<p>{character.background}</p>
					<h3>Status:</h3>
					<p>
						Hitpoints: {character.hitPoints.cur} / {character.hitPoints.max + character.hitPoints.temp}
					</p>
					<div className="hpEdit">
						<button name="subtract" onClick={this.hpEdit}>
							-
						</button>
						<input className="hpChange" type="text" onChange={this.hpHandleChange} />
						<button name="add" onClick={this.hpEdit}>
							+
						</button>
					</div>
					<h3>Abilities:</h3>
					<p>
						<strong>Strength:</strong> {character.ability.str} (Mod:{' '}
						{Math.floor(character.ability.str / 2) - 5})
					</p>
					<p>
						<strong>Dexterity:</strong> {character.ability.dex} (Mod:{' '}
						{Math.floor(character.ability.dex / 2) - 5})
					</p>
					<p>
						<strong>Constitution:</strong> {character.ability.con} (Mod:{' '}
						{Math.floor(character.ability.con / 2) - 5})
					</p>
					<p>
						<strong>Intelligence:</strong> {character.ability.int} (Mod:{' '}
						{Math.floor(character.ability.int / 2) - 5})
					</p>
					<p>
						<strong>Wisdom:</strong> {character.ability.wis} (Mod:{' '}
						{Math.floor(character.ability.wis / 2) - 5})
					</p>
					<p>
						<strong>Charisma</strong> {character.ability.cha} (Mod:{' '}
						{Math.floor(character.ability.str / 2) - 5})
					</p>
				</div>
			);
		} else {
			content = <p>Loading...</p>;
		}
		return content;
	}

	componentDidMount() {
		console.log('Show: componentDidMount');
		this.fetchThis();
	}
}

export default Show;
