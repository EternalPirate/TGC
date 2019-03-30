import React, { Component } from 'react';

export class ChartPolyline extends Component {
	
	
	render() {
		
		return (
			<g>
				<polyline
					points="0 0"
					stroke="0"
					strokeWidth="0"
					visibility="visible"
					fill="red"/>
			</g>
		)
	};
}
