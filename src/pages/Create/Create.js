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
			abilityRolls: [],
			rank1: null,
			rank2: null,
			rank3: null,
			rank4: null,
			rank5: null,
			rank6: null
		};
		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.rollAbilities = this.rollAbilities.bind(this);
	}

	rollAbilities(evt) {
		if (evt) {
			evt.preventDefault();
		}
		let abilities = [];
		let rolls;
		for (let i = 0; i < 6; i++) {
			rolls = [];
			for (let j = 0; j < 4; j++) {
				rolls.push(Math.ceil(Math.random() * 6));
			}
			let sortedRolls = rolls.sort((a, b) => a - b);
			console.log(sortedRolls);
			sortedRolls.shift();
			console.log(sortedRolls);
			let final = sortedRolls.reduce((acc, cv) => {
				return (acc += cv);
			}, 0);
			console.log(final);
			abilities.push(final);
		}
		let scores = abilities.sort((a, b) => a - b);
		this.setState({ abilityRolls: scores });
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
		let hitDie;
		switch (this.state.class) {
			case 'Wizard' || 'Sorceror':
				hitDie = 6;
				break;
			case 'Bard' || 'Cleric' || 'Druid' || 'Monk' || 'Rogue' || 'Warlock':
				hitDie = 8;
				break;
			case 'Fighter' || 'Paladin' || 'Ranger':
				hitDie = 10;
				break;
			case 'Barbarian':
				hitDie = 12;
				break;
			default:
				hitDie = 8;
		}
		let newCharacter = {
			name: this.state.name,
			race: this.state.race,
			class: this.state.class,
			background: this.state.background,
			alignment: this.state.alignment,
			hitDie: hitDie,
			hitPoints: {
				max: 10 + hitDie,
				cur: 10 + hitDie
			},
			ability: {
				[this.state.rank1]: this.state.abilityRolls[0],
				[this.state.rank2]: this.state.abilityRolls[1],
				[this.state.rank3]: this.state.abilityRolls[2],
				[this.state.rank4]: this.state.abilityRolls[3],
				[this.state.rank5]: this.state.abilityRolls[4],
				[this.state.rank6]: this.state.abilityRolls[5]
			}
		};
		this.props.newCharacter(newCharacter);
	}

	render() {
		let selectors = [];
		if (this.state.abilityRolls) {
			let abilityScores = this.state.abilityRolls.map((score, i) => (
				<h3 className={`score score-${i}`} key={i}>
					{parseInt(score, 10)}
				</h3>
			));
			for (let i = 0; i < 6; i++) {
				let newSelector = (
					<div key={i}>
						{abilityScores[i]}
						<select required name={`rank${i + 1}`} onChange={this.handleChange}>
							<option> </option>
							<option value="str">Strength</option>
							<option value="dex">Dexterity</option>
							<option value="con">Constitution</option>
							<option value="int">Intelligence</option>
							<option value="wis">Wisdom</option>
							<option value="cha">Charisma</option>
						</select>
					</div>
				);
				selectors.push(newSelector);
			}
		}

		return (
			<div className="Create">
				<form onSubmit={this.submitForm}>
					<h3>New Character:</h3>
					<p>Name:</p>
					<input required type="text" name="name" onChange={this.handleChange} />
					<p>Race:</p>
					<select required name="race" onChange={this.handleChange}>
						<option> </option>
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
					<select required name="class" onChange={this.handleChange}>
						<option> </option>
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
					<select required name="background" onChange={this.handleChange}>
						<option> </option>
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
					<div className="Abilities">
						<h2>Abilities</h2>
						<p>
							The following values were generated by adding four d6 rolls and subtracting the lowest roll.
							Please select a different ability from each dropdown menu.
						</p>
						<button onClick={this.rollAbilities} className="re-roll">
							Re-roll
						</button>
						<div className="ability-selectors">{selectors}</div>
					</div>
					<input type="submit" />
				</form>
			</div>
		);
	}
	componentDidMount() {
		console.log('Create: componentDidMount');
		this.rollAbilities();
	}
}

export default Create;
