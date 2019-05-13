import React, { Component } from 'react';

class Show extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		return (
			<div>
				<p>Show</p>
			</div>
		);
	}
}

export default Show;
