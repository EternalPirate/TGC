import {
	DRAG_LEFT_DRAGGABLE_BORDER,
	DRAG_RIGHT_DRAGGABLE_BORDER,
	UPDATE_FRAME
} from '~/store/actions/chartFrameActions';


export interface FrameState {
	// from index
	from: number;
	// to index
	to: number;
	// max data value
	maxValHeight: number;
	// visible data array
	visibleData: number[];
}

const initState: FrameState = {
	from: 0,
	to: 0,
	maxValHeight: 0,
	visibleData: []
};

export const chartFrameReducer = (state = initState, action: any) => {
	switch (action.type) {
		case UPDATE_FRAME:
			const newState = action.payload;
			
			return {
				...state,
				...newState
			};
		case DRAG_LEFT_DRAGGABLE_BORDER:
			return state;
		case DRAG_RIGHT_DRAGGABLE_BORDER:
			return state;
			
		default:
			return state;
	}
};
