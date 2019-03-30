import { combineReducers } from 'redux'

import { rootReducers, RootState } from '~/store/reducers/rootReducers/rootReducers';
import { chartFrameReducer } from '~/store/reducers/chartFrame';


export interface CombinedState {
	rootState: RootState;
	chartFrameState: any;
}

export default combineReducers<CombinedState>({
	rootState: rootReducers,
	chartFrameState: chartFrameReducer
})
