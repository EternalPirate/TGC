import { FrameState } from '~/store/reducers/chartFrame/frameReducer';

export const DRAG_LEFT_DRAGGABLE_BORDER = 'DRAG_LEFT_DRAGGABLE_BORDER';
export const DRAG_RIGHT_DRAGGABLE_BORDER = 'DRAG_RIGHT_DRAGGABLE_BORDER';
export const UPDATE_FRAME = 'UPDATE_FRAME';
export const TOGGLE_FRAME_ELEMENT = 'TOGGLE_FRAME_ELEMENT';

export const onDragLDB = () => ({type: DRAG_LEFT_DRAGGABLE_BORDER});
export const onDragRDB = () => ({type: DRAG_RIGHT_DRAGGABLE_BORDER});
export const updateFrame = (frameArea: FrameState) => ({type: UPDATE_FRAME, payload: frameArea});
export const toggleFrameElement = (index: number) => ({type: TOGGLE_FRAME_ELEMENT, payload: index});
