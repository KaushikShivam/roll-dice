import React, { Component } from 'react';
import './App.css';

import RollDice from './RollDice';

class App extends Component {
	render() {
		return (
			<div>
				<RollDice face='five' />
			</div>
		);
	}
}

export default App;
