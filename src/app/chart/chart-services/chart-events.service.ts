import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { SortedData, SortedX, SortedY } from '../../app.component';
import { calcFrameArea } from '../chart-utils/chart-utils';

export interface Settings {
  // main chart
  main: {
    height: number;
    // stroke width of polyline
    polylineStrokeWidth: number;
    // vertical padding
    paddingBot: number;
  };
  // thumb chart
  thumb: {
    height: number;
    // stroke width of polyline
    polylineStrokeWidth: number;
  };
  
  grid: {
    // horizontal lines
    xLinesThickness: number;
    // horizontal labels on the data
    yLabelsCount: number;
    // font size for x/y labels
    fontSize: number;
  };
}

export interface TogglePolylineObj {
  index: number; // polyline index
  isVisible: boolean;
}

export interface VisibleFrameObj {
  from: number; // from index
  to: number; // from index
  maxValHeight: number; // max data value
  visibleArr: SortedY[];
}

@Injectable({
  providedIn: 'root'
})
export class ChartEventsService {
  // chart width
  width: number = window.innerWidth;
  // x data length
  xLen: number;
  // init ratio percent. for points gap and frame width
  initRatioPercent = 0.2;
  
  settings: Settings = {
    main: {
      height: 500,
      polylineStrokeWidth: 2,
      paddingBot: 40
    },
    thumb: {
      height: 100,
      polylineStrokeWidth: 1,
    },
    grid: {
      xLinesThickness: 1,
      yLabelsCount: 6,
      fontSize: 14
    }
  };
  
  toggleButtonSubject: Subject<TogglePolylineObj> = new Subject();
  visibleFrameSubject: Subject<VisibleFrameObj> = new Subject();
  
  private yData: SortedY[];
  private xData: SortedX;
  private frameArea: VisibleFrameObj;
  
  
  constructor() { }
  
  
  init(data: SortedData) {
    this.xLen = data.x.data.length - 1;
    this.settings.main.height += this.settings.main.paddingBot;
    this.xData = data.x;
    this.yData = data.y;
    
    // init visible frame will be 20% of chart length
    const to = Math.floor(this.xLen * this.initRatioPercent);
    this.setVisibleFrame(0, to);
  }
  
  getXData(): SortedX {
    return this.xData;
  }
  
  getVisibleFrame(): VisibleFrameObj {
    return this.frameArea;
  }
  
  setVisibleFrame(from: number, to: number): void {
    this.frameArea = calcFrameArea(this.yData, from, to);
    
    this.visibleFrameSubject.next(this.frameArea);
  }
  
  toggleButton(togglePolylineObj: TogglePolylineObj): void {
    this.yData[togglePolylineObj.index].isVisible = togglePolylineObj.isVisible;
    
    this.toggleButtonSubject.next(togglePolylineObj);
    this.setVisibleFrame(this.frameArea.from, this.frameArea.to);
  }
}
