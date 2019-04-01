import {
	TOGGLE_FRAME_ELEMENT,
	UPDATE_FRAME
} from '~/store/actions/chartFrameActions';
import { SortedY } from '~/models/dataModel';
import { calcFrameArea, updateObjectInArray } from '~/utils/frameUtils';


export interface FrameState {
	// from index
	from: number;
	// to index
	to: number;
	// max data value
	maxValHeight: number;
	// visible data array
	visibleData: SortedY[];
}

const initState: FrameState = {
	from: 0,
	to: 0,
	maxValHeight: 0,
	visibleData: []
};

export const frameReducer = (state: FrameState = initState, action: any) => {
	switch (action.type) {
		case UPDATE_FRAME:
			const newState: FrameState = action.payload;
			
			return { ...newState };
		case TOGGLE_FRAME_ELEMENT:
			const frameElIdx: number = action.payload;
			const frameEl = { ...state.visibleData[frameElIdx] };
			frameEl.isVisible = !frameEl.isVisible;
			
			const updatedVisibleData = updateObjectInArray(state.visibleData, {
				index: frameElIdx,
				item: frameEl
			});
			
			
			// const frameArea: FrameState = calcFrameArea(updatedVisibleData, state.from, state.to);
			
			return {
				...state,
				visibleData: updatedVisibleData
			};
			
		default:
			return state;
	}
};
