import React, { Component } from 'react';
import { Dispatch, Action, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CombinedState } from '~/store/reducers';
import { FrameState } from '~/store/reducers/chartFrame/frameReducer';
import { Settings } from '~/store/reducers/rootReducers/rootReducers';
import { SortedX } from '~/models/dataModel';


interface XLabelsObj {
	value: string | number;
	x: number;
	y: number;
	opacity: string;
	fontSize: number;
	fill: string;
}

interface BeforeLoopCalcObj {
	chartWidth: number;
	yPoint: number;
	xLabelsCount: number;
	visiblePointsArr: number[];
	visibleValuesPiece: number;
	visibleValuesMiddlePiece: number;
	visiblePointsPiece: number;
	visiblePointsMiddlePiece: number;
}

interface LoopCalcObj {
	value: number;
	xPoint: number;
	yPoint: number;
}

interface ChartXLabelsOwnProps {
}

interface ChartXLabelsStateProps {
	frameState: FrameState;
	settings: Settings;
	xData: SortedX;
}

interface ChartXLabelsDispatchProps {
}

type ChartXLabelsCombinedProps = ChartXLabelsOwnProps & ChartXLabelsStateProps & ChartXLabelsDispatchProps;


class ChartXLabels extends Component<ChartXLabelsCombinedProps> {
	
	private static loopCalc(beforeLoopCalcObj: BeforeLoopCalcObj, index: number): LoopCalcObj {
		const {
			chartWidth,
			yPoint,
			visiblePointsArr,
			visibleValuesPiece,
			visibleValuesMiddlePiece,
			visiblePointsPiece,
			visiblePointsMiddlePiece
		} = beforeLoopCalcObj;
		
		// get middle index of each piece
		const pointValueIdx = visibleValuesPiece * (index + 1) - visibleValuesMiddlePiece;
		
		// get value
		const value = visiblePointsArr[pointValueIdx] ? visiblePointsArr[pointValueIdx].toString() : '0';
		// get value width
		const valueWidth = Math.round(value.length * chartWidth);
		
		// get middle point of each piece
		let xPoint = visiblePointsPiece * (index + 1) - visiblePointsMiddlePiece;
		// and set it in the middle of the value
		xPoint -= valueWidth / 2;
		
		return {
			value: Number(value),
			xPoint,
			yPoint,
		};
	}
	
	private createLabels(): JSX.Element[] {
		const xLabelsArr: JSX.Element[] = [];
		
		// run build only if we have visibleData in frameState
		if (this.props.frameState.visibleData.length > 0) {
			const beforeLoopCalcObj: BeforeLoopCalcObj = this.beforeLoopCalc(this.props.frameState);
			
			for (let xDataIndex = 0; xDataIndex < beforeLoopCalcObj.xLabelsCount; xDataIndex++) {
				const loopCalcObj: LoopCalcObj = ChartXLabels.loopCalc(beforeLoopCalcObj, xDataIndex);
				
				xLabelsArr.push((
					<text
						key={'key_' + loopCalcObj.xPoint}
						x={loopCalcObj.xPoint}
						y={loopCalcObj.yPoint}
						fontSize={this.props.settings.grid.fontSize}
						fill="black">
						{loopCalcObj.value}
					</text>
				));
			}
		}
		
		return xLabelsArr;
	}
	
	private beforeLoopCalc(visibleFrame: FrameState): BeforeLoopCalcObj {
		// one char width
		const chartWidth = this.props.settings.grid.fontSize / 2;
		
		
		// calculate y point position
		const yPoint = this.props.settings.main.height - (this.props.settings.main.paddingBot / 2);
		
		
		// left right padding (in chars)
		const xLabelsPadding = chartWidth * 6;
		
		
		// calculate visible values count
		// according to value width + padding
		let xLabelsCount = window.innerWidth / (this.props.xData.maxValLength * chartWidth + xLabelsPadding);
		xLabelsCount = Math.floor(xLabelsCount);
		
		
		// get values according to visibleFrame
		const visiblePointsArr: number[] = this.props.xData.data.slice(visibleFrame.from, visibleFrame.to);
		
		
		// distribute values according to visiblePointsArr
		const visibleValuesPiece = Math.floor(visiblePointsArr.length / xLabelsCount);
		// middle of one value piece
		const visibleValuesMiddlePiece = Math.floor(visiblePointsArr.length / xLabelsCount / 2);
		
		
		// distribute x points according to window.innerWidth
		const visiblePointsPiece = Math.floor(window.innerWidth / xLabelsCount);
		// middle of one x points
		const visiblePointsMiddlePiece = Math.floor(window.innerWidth / xLabelsCount / 2);
		
		
		return {
			chartWidth,
			yPoint,
			xLabelsCount,
			visiblePointsArr,
			visibleValuesPiece,
			visibleValuesMiddlePiece,
			visiblePointsPiece,
			visiblePointsMiddlePiece
		};
	}
	
	render() {
		const xLabelsArr: JSX.Element[] = this.createLabels();
		
		return (<g>{xLabelsArr}</g>)
	};
}

const mapStateToProps = (state: CombinedState): ChartXLabelsStateProps => ({
	frameState: state.frameState,
	settings: state.rootState.settings,
	xData: state.rootState.data.x,
});

const mapDispatchToProps = (dispatch: Dispatch<Action<ChartXLabelsDispatchProps>>) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChartXLabels);
