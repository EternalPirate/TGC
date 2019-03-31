import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChartPolyline from '~/components/ChartPolyline/ChartPolyline';
import { ChartXLines } from '~/components/ChartXLines/ChartXLines';
import { ChartXLabels } from '~/components/ChartXLabels/ChartXLabels';
import { ChartYLabels } from '~/components/ChartYLabels/ChartYLabels';
import { CombinedState } from '~/store/reducers';
import { ChartProp, Settings } from '~/store/reducers/rootReducers/rootReducers';


export interface ChartSvg {
	width: number;
	height: number;
	polylineStrokeWidth: number;
	paddingBot?: number;
}

interface ChartMainOwnProps {
}

interface ChartMainStateProps {
	chart: ChartProp;
	settings: Settings;
}

interface ChartMainDispatchProps {
}

type ChartMainCombinedProps = ChartMainOwnProps & ChartMainStateProps & ChartMainDispatchProps;


class ChartMain extends Component<ChartMainCombinedProps> {
	
	
	render() {
	    const svg: ChartSvg = {
		    ...this.props.settings.main,
            width: this.props.chart.width
        };
        const viewBox = `0 0 ${svg.width} ${svg.height}`;
		
		
		return (
			<svg
                viewBox={viewBox}
                width={svg.width}
                height={svg.height}
				x="0"
				y="0">
				<ChartXLines/>
				<ChartXLabels/>
				<ChartPolyline svg={svg}/>
				<ChartYLabels/>
			</svg>
		)
	};
}

const mapStateToProps = (state: CombinedState): ChartMainStateProps => {
	return {
		chart: state.rootState.chart,
		settings: state.rootState.settings
	}
};

export default connect(mapStateToProps)(ChartMain);
