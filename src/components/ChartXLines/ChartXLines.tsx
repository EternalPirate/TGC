import React, { Component } from 'react';
import { Dispatch, Action, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CombinedState } from '~/store/reducers';
import { Settings } from '~/store/reducers/rootReducers/rootReducers';
import { ChartSvg } from '~/hocComponents/ChartMain/ChartMain';


interface ChartXLinesOwnProps {
	svg: ChartSvg;
}

interface ChartXLinesStateProps {
	settings: Settings;
}

interface ChartXLinesDispatchProps {
}

type ChartXLinesCombinedProps = ChartXLinesOwnProps & ChartXLinesStateProps & ChartXLinesDispatchProps;


class ChartXLines extends Component<ChartXLinesCombinedProps> {
	private createLines(): JSX.Element[] {
		const linesArr: JSX.Element[] = [];
		for (let lineIndex = 1; lineIndex <= this.props.settings.grid.yLabelsCount; lineIndex++) {
			// evenly distribute lines from the ground
			let lineGap = this.props.svg.height / this.props.settings.grid.yLabelsCount * lineIndex;
			lineGap -= this.props.settings.main.paddingBot;
			lineGap += this.props.settings.grid.xLinesThickness;

			
			linesArr.push((
				<line
					key={'key_' + lineIndex}
					x1="0"
					x2={this.props.svg.width}
					y1={lineGap}
					y2={lineGap}
					stroke="#e8e8e8"
					strokeWidth={this.props.settings.grid.xLinesThickness}
				/>
			));
		}
		
		return linesArr;
	}
	
	render() {
		const linesArr: JSX.Element[] = this.createLines();
		
		return (<g>{linesArr}</g>)
	};
}

const mapStateToProps = (state: CombinedState): ChartXLinesStateProps => ({
	settings: state.rootState.settings
});

const mapDispatchToProps = (dispatch: Dispatch<Action<ChartXLinesDispatchProps>>) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChartXLines);
