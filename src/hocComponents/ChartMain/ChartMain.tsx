import React, { Component } from 'react';
import { ChartXLines } from '../../components/ChartXLines/ChartXLines';
import { ChartXLabels } from '../../components/ChartXLabels/ChartXLabels';
import { ChartPolyline } from '../../components/ChartPolyline/ChartPolyline';
import { ChartYLabels } from '../../components/ChartYLabels/ChartYLabels';

export class ChartMain extends Component {
	
	
	render() {
		
		return (
			<svg
				viewBox="0 0 0 0"
				width="0"
				height="0"
				x="0"
				y="0">
				<ChartXLines/>
				<ChartXLabels/>
				<ChartPolyline/>
				<ChartYLabels/>
			</svg>
		)
	};
}
