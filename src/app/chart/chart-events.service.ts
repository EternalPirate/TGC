import { EventEmitter, Injectable } from '@angular/core';

export interface TogglePolylineObj {
  index: number; // polyline index
  isVisible: boolean;
}

export interface VisibleFrameObj {
  from: number; // array index
  to: number; // array index
}

@Injectable({
  providedIn: 'root'
})
export class ChartEventsService {
  togglePolyline: EventEmitter<TogglePolylineObj> = new EventEmitter();
  visibleFrame: EventEmitter<VisibleFrameObj> = new EventEmitter();
  maxValHeight: EventEmitter<number> = new EventEmitter();
  
  constructor() { }
}
