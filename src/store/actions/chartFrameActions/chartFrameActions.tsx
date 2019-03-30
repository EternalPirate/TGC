import { FrameState } from '~/store/reducers/chartFrame/chartFrameReducer';

export const DRAG_LEFT_DRAGGABLE_BORDER = 'DRAG_LEFT_DRAGGABLE_BORDER';
export const DRAG_RIGHT_DRAGGABLE_BORDER = 'DRAG_RIGHT_DRAGGABLE_BORDER';
export const UPDATE_FRAME = 'UPDATE_FRAME';

export const onDragLDB = () => ({type: DRAG_LEFT_DRAGGABLE_BORDER});
export const onDragRDB = () => ({type: DRAG_RIGHT_DRAGGABLE_BORDER});
export const updateFrame = (frameArea: FrameState) => ({type: UPDATE_FRAME, payload: frameArea});
