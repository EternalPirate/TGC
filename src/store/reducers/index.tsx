import { combineReducers } from 'redux'

import { rootReducers, RootState } from '~/store/reducers/rootReducers/rootReducers';
import { frameReducer, FrameState } from '~/store/reducers/chartFrame/frameReducer';


export interface CombinedState {
	rootState: RootState;
	frameState: FrameState;
}

export default combineReducers<CombinedState>({
	rootState: rootReducers,
	frameState: frameReducer
})
