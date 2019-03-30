import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FrameState } from '~/store/reducers/chartFrame/chartFrameReducer';
import { CombinedState } from '~/store/reducers';

class ChartFrame extends Component<any, FrameState> {
	
	render() {
		console.log(this.props.frameState);
		
		return (
			<g>
				<rect
					x="0"
					y="0"
					width="0"
					height="0"
					fill="red"
					cursor="pointer"/>
			</g>
		)
	};
}

const mapStateToProps = (state: CombinedState) => {
	return {
		frameState: state.chartFrameState,
	}
};

export default connect(mapStateToProps)(ChartFrame);
