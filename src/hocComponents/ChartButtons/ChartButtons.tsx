import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LineButton } from '~/components/UI/LineButton/LineButton';
import { CombinedState } from '~/store/reducers';
import { FrameState } from '~/store/reducers/chartFrame/frameReducer';
import { toggleFrameElement } from '~/store/actions/chartFrameActions';


interface ChartButtonsOwnProps {
}

interface ChartButtonsStateProps {
	frameState: FrameState
}

interface ChartButtonsDispatchProps {
	toggleFrameElement: (index: number) => void;
}

type ChartButtonsCombinedProps = ChartButtonsOwnProps & ChartButtonsStateProps & ChartButtonsDispatchProps;


class ChartButtons extends Component<ChartButtonsCombinedProps> {
	
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
					toggle={() => (this.props.toggleFrameElement(buttonsIdx))}
				>{curBtn.name}</LineButton>
			));
		}
		
		return (buttons)
	};
}

const mapStateToProps = (state: CombinedState): ChartButtonsStateProps => {
	return {
		frameState: state.frameState,
	}
};

export default connect(mapStateToProps, {toggleFrameElement})(ChartButtons);
