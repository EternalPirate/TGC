import { FrameState } from '~/store/reducers/chartFrame/frameReducer';

export const UPDATE_FRAME = 'UPDATE_FRAME';
export const TOGGLE_FRAME_ELEMENT = 'TOGGLE_FRAME_ELEMENT';

export const updateFrame = (frameArea: FrameState) => ({type: UPDATE_FRAME, payload: frameArea});
export const toggleFrameElement = (index: number) => ({type: TOGGLE_FRAME_ELEMENT, payload: index});
