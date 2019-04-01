import React, { Component } from 'react';
import { Dispatch, Action, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { FrameState } from '~/store/reducers/chartFrame/frameReducer';
import { roundUpVal } from '~/utils/frameUtils';
import { CombinedState } from '~/store/reducers';
import { Settings } from '~/store/reducers/rootReducers/rootReducers';


interface ChartYLabelsOwnProps {
}

interface ChartYLabelsStateProps {
	frameState: FrameState;
	settings: Settings;
}

interface ChartYLabelsDispatchProps {
}

type ChartYLabelsCombinedProps = ChartYLabelsOwnProps & ChartYLabelsStateProps & ChartYLabelsDispatchProps;


class ChartYLabels extends Component<ChartYLabelsCombinedProps> {
	private horNumMarginBottom = 5;
	
	constructor(props: ChartYLabelsCombinedProps) {
		super(props);
	}
	
	private createYLabels(): JSX.Element[] {
		const yLabelsArr: JSX.Element[] = [];
		
		const horStep = roundUpVal(this.props.frameState.maxValHeight / this.props.settings.grid.yLabelsCount);
		
		// build horizontal lines on the data
		for (let lineIndex = 1; lineIndex <= this.props.settings.grid.yLabelsCount; lineIndex++) {
			// evenly distribute lines from the ground
			let y = this.props.settings.main.height / this.props.settings.grid.yLabelsCount * lineIndex;
			y -= this.props.settings.main.paddingBot;
			y -= this.horNumMarginBottom;
			
			// multiply line on proportional value
			let value = this.props.settings.grid.yLabelsCount * horStep;
			// and show it from biggest to lowest
			value -= lineIndex * horStep;
			
			
			yLabelsArr.push((
				<text
					key={'key_' + value}
					x="0"
					y={y}
					fontSize={this.props.settings.grid.fontSize}
					fill="black">
					{value}
				</text>
			));
		}
		
		
		return yLabelsArr;
	}
	
	render() {
		const yLabelsArr: JSX.Element[] = this.createYLabels();
		
		return (<g>{yLabelsArr}</g>)
	};
}

const mapStateToProps = (state: CombinedState): ChartYLabelsStateProps => ({
	frameState: state.frameState,
	settings: state.rootState.settings
});

const mapDispatchToProps = (dispatch: Dispatch<Action<ChartYLabelsDispatchProps>>) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChartYLabels);
