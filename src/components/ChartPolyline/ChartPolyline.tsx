import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ChartMetaData, SortedY } from '~/models/dataModel';
import { CombinedState } from '~/store/reducers';
import { FrameState } from '~/store/reducers/chartFrame/frameReducer';
import { ChartSvg } from '~/hocComponents/ChartMain/ChartMain';
import { Settings } from '~/store/reducers/rootReducers/rootReducers';


interface ChartPolylineOwnProps {
	svg: ChartSvg;
	isThumb?: boolean;
}

interface ChartPolylineStateProps {
	frameState: FrameState;
	settings: Settings;
}

interface ChartPolylineDispatchProps {
}

type ChartPolylineCombinedProps = ChartPolylineOwnProps & ChartPolylineStateProps & ChartPolylineDispatchProps;


class ChartPolyline extends Component<ChartPolylineCombinedProps> {
	
	private buildPolyline(svg: ChartSvg): JSX.Element[] {
		const polylineArr: JSX.Element[] = [];
		const yDataLen: number = this.props.frameState.visibleData.length;
		for (let yDataIdx = 0; yDataIdx < yDataLen; yDataIdx++) {
			const curData: SortedY = this.props.frameState.visibleData[yDataIdx];
			

			let pointsArr: string[] = [];
			if (this.props.isThumb) {
				pointsArr = this.calcXY(curData.data, svg);
			} else {
				const curDataArr: ChartMetaData = curData.data.slice(this.props.frameState.from, this.props.frameState.to);
				pointsArr = this.calcXY(curDataArr, svg);
			}
			
			
			polylineArr.push((
				<polyline
					key={curData.columnKey}
					points={pointsArr.join()}
					stroke={curData.color}
					strokeWidth={svg.polylineStrokeWidth}
					visibility={curData.isVisible ? 'visible' : 'hidden'}
					fill="none"/>
			))
		}
		
		return polylineArr;
	}
	
	private calcXY(data: ChartMetaData, svg: ChartSvg): string[] {
		const pointsArr = [];
		const dataLength = data.length;
		const paddingBot = svg.paddingBot ? svg.paddingBot : 0;
		
		for (let dataIndex = 0; dataIndex < dataLength; dataIndex++) {
			const curItem = Number(data[dataIndex]);
			const pointStepGap: number = svg.width / (dataLength - 1);
			const xPoint = (pointStepGap * dataIndex).toFixed(4);
			// get proportional val of Y point
			let yPoint = curItem / this.props.frameState.maxValHeight;
			yPoint *= svg.height - paddingBot;
			// turn over lines and add ver padding
			yPoint = Number((svg.height - yPoint - paddingBot).toFixed(4));
			
			// create lines array [x,y]
			pointsArr.push(`${xPoint} ${yPoint}`);
		}
		
		return pointsArr;
	}
	
	render() {
		const polylineArr = this.buildPolyline(this.props.svg);
		
		return (<g>{polylineArr}</g>)
	};
}

const mapStateToProps = (state: CombinedState): ChartPolylineStateProps => {
	return {
		frameState: state.frameState,
		settings: state.rootState.settings
	}
};

export default connect(mapStateToProps)(ChartPolyline);
