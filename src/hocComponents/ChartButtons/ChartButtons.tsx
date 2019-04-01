import React, { Component } from 'react';
import { bindActionCreators, Dispatch, Action } from 'redux';
import { connect } from 'react-redux';

import { LineButton } from '~/components/UI/LineButton/LineButton';
import { CombinedState } from '~/store/reducers';
import { FrameState } from '~/store/reducers/chartFrame/frameReducer';
import { toggleFrameElement, updateFrame } from '~/store/actions/chartFrameActions';


interface ChartButtonsOwnProps {
}

interface ChartButtonsStateProps {
	frameState: FrameState
}

interface ChartButtonsDispatchProps {
	toggleFrameElement: (index: number) => void;
	updateFrame: (frameArea: FrameState) => void;
}

type ChartButtonsCombinedProps = ChartButtonsOwnProps & ChartButtonsStateProps & ChartButtonsDispatchProps;


class ChartButtons extends Component<ChartButtonsCombinedProps> {
	
	toggleButton(buttonsIdx: number): void {
		this.props.toggleFrameElement(buttonsIdx);
		
		// update chart with new visible
		// this.props.updateFrame(this.props.frameState);
	}
	
	render() {
		const frameState: FrameState = this.props.frameState;
		
		const buttons: JSX.Element[] = [];
		const buttonsLen = frameState.visibleData.length;
		for (let buttonsIdx = 0; buttonsIdx < buttonsLen; buttonsIdx++) {
			const curBtn = frameState.visibleData[buttonsIdx];
			
			buttons.push((
				<LineButton
					key={curBtn.columnKey}
					isVisible={curBtn.isVisible}
					color={curBtn.color}
					toggle={() => (this.toggleButton(buttonsIdx))}
				>{curBtn.name}</LineButton>
			));
		}
		
		return (buttons)
	};
}

const mapStateToProps = (state: CombinedState): ChartButtonsStateProps => ({
	frameState: state.frameState
});

const mapDispatchToProps = (dispatch: Dispatch<Action<ChartButtonsDispatchProps>>) => bindActionCreators({
	toggleFrameElement: toggleFrameElement,
	updateFrame: updateFrame
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChartButtons);
