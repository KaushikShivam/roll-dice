import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
	static defaultProps = {
		sides: ['one', 'two', 'three', 'four', 'five', 'six']
	};

	constructor() {
		super();
		this.state = {
			die1: 'one',
			die2: 'one',
			rolling: false
		};
		this.roll = this.roll.bind(this);
	}

	roll(e) {
		const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
		const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

		this.setState({
			die1: newDie1,
			die2: newDie2,
			rolling: true
		});

		setTimeout(() => {
			this.setState({
				rolling: false
			});
		}, 1000);
	}

	render() {
		return (
			<div className='RollDice'>
				<div className='RollDice-container'>
					<Die face={this.state.die1} rolling={this.state.rolling} />
					<Die face={this.state.die2} rolling={this.state.rolling} />
				</div>
				<button disabled={this.state.rolling} onClick={this.roll}>
					{this.state.rolling ? 'ROLLING..' : 'ROLL DICE!!'}
				</button>
			</div>
		);
	}
}

export default RollDice;
