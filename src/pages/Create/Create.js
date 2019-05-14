import React, { Component } from 'react';
import './Create.css';

class Create extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			name: null,
			race: null,
			class: null,
			background: null,
			alignment: null,
			level: 1,
			ability: {
				str: null,
				dex: null,
				int: null,
				wis: null,
				con: null,
				cha: null
			},
			proficiency: {
				weapon: [],
				armor: [],
				skill: [],
				save: []
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	handleChange(evt) {
		let target = evt.target;
		let name = target.name;
		let value = target.value;
		this.setState({ [name]: value });
		console.log('change handled');
	}

	submitForm(evt) {
		evt.preventDefault();
		let newCharacter = {
			name: this.state.name,
			race: this.state.race,
			class: this.state.class,
			background: this.state.background,
			alignment: this.state.alignment
		};
		this.props.newCharacter(newCharacter);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.submitForm}>
					<h3>New Character:</h3>
					<p>Name:</p>
					<input type="text" name="name" onChange={this.handleChange} />
					<p>Race:</p>
					<select name="race" onChange={this.handleChange}>
						<option value="Dragonborn">Dragonborn</option>
						<option value="Dwarf">Dwarf</option>
						<option value="Elf">Elf</option>
						<option value="Gnome">Gnome</option>
						<option value="Half-elf">Half-elf</option>
						<option value="Half-orc">Half-orc</option>
						<option value="Halfling">Halfling</option>
						<option value="Human">Human</option>
						<option value="Tiefling">Tiefling</option>
					</select>
					<p>Class:</p>
					<select name="class" onChange={this.handleChange}>
						<option value="Barbarian">Barbarian</option>
						<option value="Bard">Bard</option>
						<option value="Cleric">Cleric</option>
						<option value="Druid">Druid</option>
						<option value="Fighter">Fighter</option>
						<option value="Monk">Monk</option>
						<option value="Paladin">Paladin</option>
						<option value="Ranger">Ranger</option>
						<option value="Rogue">Rogue</option>
						<option value="Sorceror">Sorceror</option>
						<option value="Warlock">Warlock</option>
						<option value="Wizard">Wizard</option>
					</select>
					<p>Background:</p>
					<select name="background" onChange={this.handleChange}>
						<option value="Acolyte">Acolyte</option>
						<option value="Criminal">Criminal</option>
						<option value="FolkHero">Folk Hero</option>
						<option value="Noble">Noble</option>
						<option value="Sage">Sage</option>
						<option value="Soldier">Soldier</option>
					</select>
					<div className="Alignment-Grid">
						<h3 className="Alignment-Header">Alignment:</h3>
						<p className="Lawful">Lawful</p>
						<p className="Neutral-Order">Neutral</p>
						<p className="Chaotic">Chaotic</p>
						<p className="Good">Good</p>
						<input
							className="lawfulGood"
							type="radio"
							name="alignment"
							value="Lawful Good"
							onChange={this.handleChange}
						/>
						<input
							className="neutralGood"
							type="radio"
							name="alignment"
							value="Neutral Good"
							onChange={this.handleChange}
						/>
						<input
							className="chaoticGood"
							type="radio"
							name="alignment"
							value="Chaotic Good"
							onChange={this.handleChange}
						/>
						<p className="Neutral-Morals">Neutral</p>
						<input
							className="lawfulNeutral"
							type="radio"
							name="alignment"
							value="Lawful Neutral"
							onChange={this.handleChange}
						/>
						<input
							className="trueNeutral"
							type="radio"
							name="alignment"
							value="True Neutral"
							onChange={this.handleChange}
						/>
						<input
							className="chaoticNeutral"
							type="radio"
							name="alignment"
							value="Chaotic Neutral"
							onChange={this.handleChange}
						/>
						<p className="Evil">Evil</p>
						<input
							className="lawfulEvil"
							type="radio"
							name="alignment"
							value="Lawful Evil"
							onChange={this.handleChange}
						/>
						<input
							className="neutralEvil"
							type="radio"
							name="alignment"
							value="Neutral Evil"
							onChange={this.handleChange}
						/>
						<input
							className="chaoticEvil"
							type="radio"
							name="alignment"
							value="Chaotic Evil"
							onChange={this.handleChange}
						/>
					</div>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default Create;
