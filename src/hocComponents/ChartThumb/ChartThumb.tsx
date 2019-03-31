import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChartFrame from '~/components/ChartFrame/ChartFrame';
import ChartPolyline from '~/components/ChartPolyline/ChartPolyline';
import { CombinedState } from '~/store/reducers';
import { ChartProp, Settings } from '~/store/reducers/rootReducers/rootReducers';
import { ChartSvg } from '~/hocComponents/ChartMain/ChartMain';


interface ChartThumbOwnProps {
}

interface ChartThumbStateProps {
	chart: ChartProp;
	settings: Settings;
}

interface ChartThumbDispatchProps {
}

type ChartThumbCombinedProps = ChartThumbOwnProps & ChartThumbStateProps & ChartThumbDispatchProps;


class ChartThumb extends Component<ChartThumbCombinedProps> {
	
	
	render() {
		const svg: ChartSvg = {
			...this.props.settings.thumb,
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
				<ChartPolyline svg={svg} isThumb/>
				<ChartFrame svg={svg}/>
			</svg>
		)
	};
}

const mapStateToProps = (state: CombinedState): ChartThumbStateProps => {
	return {
		chart: state.rootState.chart,
		settings: state.rootState.settings
	}
};

export default connect(mapStateToProps)(ChartThumb);
