import React, { Component } from 'react';
import { ChartPolyline } from '../../components/ChartPolyline/ChartPolyline';
import ChartFrame from '../../components/ChartFrame/ChartFrame';

export class ChartThumb extends Component {
	
	
	render() {
		
		return (
			<svg
				viewBox="0 0 0 0"
				width="0"
				height="0"
				x="0"
				y="0">
				<ChartPolyline/>
				<ChartFrame/>
			</svg>
		)
	};
}
