import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		return (
			<header className="Header">
				<nav className="Header-Nav">
					<NavLink to="/">Dashboard</NavLink>
					<NavLink to="/new">Create</NavLink>
				</nav>
			</header>
		);
	}
}

export default Header;
