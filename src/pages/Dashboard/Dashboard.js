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
		return (
			<div>
				<p>Dashboard</p>
			</div>
		);
	}

	componentDidUpdate() {
		console.log('Dashboard: componentDidUpdate');
		axios.get('localhost:3001/characters').then((res) => {
			this.setState({ characters: res });
		});
	}
}

export default Dashboard;
