import { combineReducers } from 'redux'

import { rootReducers } from './rootReducers';
import { chartFrameReducer } from './chartFrame';
import { RootState } from './rootReducers/rootReducers';

export interface CombinedState {
	rootState: RootState;
	chartFrameState: any;
}

export default combineReducers<CombinedState>({
	rootState: rootReducers,
	chartFrameState: chartFrameReducer
})
