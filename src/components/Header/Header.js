import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		return (
			<div>
				<nav>
					<NavLink to="/">Dashboard</NavLink>
					<NavLink to="/new">Create</NavLink>
				</nav>
			</div>
		);
	}
}

export default Header;
