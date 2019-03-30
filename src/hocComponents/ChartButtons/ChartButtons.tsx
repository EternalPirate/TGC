import React, { Component } from 'react';

export class ChartButtons extends Component {
	state = {
		buttons: [0, 1]
	};
	
	render() {
		const buttons = [];
		const buttonsLen = this.state.buttons.length;
		for (let buttonsIdx = 0; buttonsIdx < buttonsLen; buttonsIdx++) {
			buttons.push((<button key={buttonsIdx}>{buttonsIdx}</button>));
		}
		
		return (buttons)
	};
}
