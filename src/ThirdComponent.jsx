import React from 'react';
import { Component } from 'react';

class ThirdComponent extends Component {
	render() {
		const id = this.props.match.params.id;
		return (
			<div>
				<h1>Ты не со мной, слезы льются на рейве</h1>
				<h2>id: {id}</h2>;
			</div>
		);
	}
}

export default ThirdComponent;
