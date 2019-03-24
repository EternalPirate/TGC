import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { ChartSvg } from '../../chart.component';
import { ChartEventsService, TogglePolylineObj, VisibleFrameObj } from '../../chart-services/chart-events.service';
import { ChartMetaData, SortedY } from '../../../app.component';
import { Subscription } from 'rxjs';

interface PolylineObj {
  points: string[];
  stroke: string;
  dataName: string;
  dataType: string;
  strokeWidth: number;
  visibility: string;
  fill: string;
}

@Component({
  selector: '[app-chart-polyline]',
  templateUrl: './chart-polyline.component.html',
  styleUrls: ['./chart-polyline.component.scss']
})
export class ChartPolylineComponent implements OnInit, OnDestroy {
  @Input() visibleFrame: VisibleFrameObj;
  @Input() svg: ChartSvg;
  @Input() isThumb: boolean;
  
  polylineArr: PolylineObj[];
  private sub1: Subscription;
  
  
  constructor(private ces: ChartEventsService) {}
  
  
  ngOnInit() {
    this.polylineArr = this.buildPolyline();
  
    if (!this.isThumb) {
      this.sub1 = this.ces.visibleFrameSubject
        .subscribe((visibleFrame: VisibleFrameObj) => {
          if (visibleFrame) {
            this.visibleFrame = visibleFrame;
            this.updatePolyline();
          }
        });
    }
  }
  
  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
  
  
  private buildPolyline(): PolylineObj[] {
    const polylineArr: PolylineObj[] = [];
    const yDataLen = this.visibleFrame.visibleArr.length;
    for (let yDataIdx = 0; yDataIdx < yDataLen; yDataIdx++) {
      const curData: SortedY = this.visibleFrame.visibleArr[yDataIdx];
      const curDataArr: ChartMetaData = curData.data.slice(this.visibleFrame.from, this.visibleFrame.to);
      const pointsArr: string[] = this.calcXY(curDataArr);
  
      polylineArr.push({
        points: pointsArr,
        stroke: curData.color,
        dataName: curData.name,
        dataType: curData.type,
        strokeWidth: this.svg.polylineStrokeWidth,
        visibility: curData.isVisible ? 'visible' : 'hidden',
        fill: 'none'
      });
    }
    
    return polylineArr;
  }
  
  private updatePolyline(): void {
    const yDataLen = this.visibleFrame.visibleArr.length;
    for (let yDataIdx = 0; yDataIdx < yDataLen; yDataIdx++) {
      const curData: SortedY = this.visibleFrame.visibleArr[yDataIdx];
      const curPolyline: PolylineObj = this.polylineArr[yDataIdx];
      const curDataArr: ChartMetaData = curData.data.slice(this.visibleFrame.from, this.visibleFrame.to);
  
      curPolyline.points = this.calcXY(curDataArr);
      curPolyline.visibility = curData.isVisible ? 'visible' : 'hidden';
    }
  }
  
  private calcXY(data: ChartMetaData): string[] {
    const pointsArr = [];
    const dataLength = data.length;
    const paddingBot = this.svg.paddingBot ? this.svg.paddingBot : 0;
    
    for (let dataIndex = 0; dataIndex < dataLength; dataIndex++) {
      const curItem = Number(data[dataIndex]);
      const pointStepGap: number = this.ces.width / (dataLength - 1);
      const xPoint = (pointStepGap * dataIndex).toFixed(4);
      // get proportional val of Y point
      let yPoint = curItem / this.visibleFrame.maxValHeight;
      yPoint *= this.svg.height - paddingBot;
      // turn over lines and add ver padding
      yPoint = Number((this.svg.height - yPoint - paddingBot).toFixed(4));

      // create lines array [x,y]
      pointsArr.push(`${xPoint} ${yPoint}`);
    }
    
    return pointsArr;
  }
}
