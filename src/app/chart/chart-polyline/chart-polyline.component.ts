import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChartSvg, Settings } from '../chart.component';
import { ChartEventsService, TogglePolylineObj, VisibleFrameObj } from '../chart-events.service';
import { ChartMetaData, SortedY } from '../../app.component';

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
export class ChartPolylineComponent implements OnInit, OnChanges, OnDestroy {
  @Input() yData: SortedY[];
  @Input() settings: Settings;
  @Input() visibleFrame: VisibleFrameObj;
  @Input() svg: ChartSvg;
  
  polylineArr: PolylineObj[];
  private sub1: Subscription;
  private sub2: Subscription;
  
  
  constructor(private chartEventsService: ChartEventsService) {
    this.sub1 = this.chartEventsService
      .togglePolyline
      .subscribe((polyline: TogglePolylineObj) => {
        this.polylineArr[polyline.index].visibility = polyline.isVisible ? 'visible' : 'hidden';
      });
  
  
    this.sub2 = this.chartEventsService
      .maxValHeight
      .subscribe((maxValHeight: number) => {
        if (this.settings && this.settings._maxValHeight) {
          this.settings._maxValHeight = maxValHeight;
        }
      });
  }
  
  
  ngOnInit() {
    this.polylineArr = this.buildPolyline();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (this.polylineArr && this.polylineArr.length > 0) {
      this.visibleFrame = changes.visibleFrame.currentValue;
      this.updatePolyline();
    }
  }
  
  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
  
  private buildPolyline(): PolylineObj[] {
    const polylineArr: PolylineObj[] = [];
    const yDataLen = this.yData.length;
    for (let yDataIdx = 0; yDataIdx < yDataLen; yDataIdx++) {
      const curData: SortedY = this.yData[yDataIdx];
      const curDataArr: ChartMetaData = curData.data.slice(this.visibleFrame.from, this.visibleFrame.to);
      const pointsArr: string[] = this.calcXY(curDataArr);
  
      polylineArr.push({
        points: pointsArr,
        stroke: curData.color,
        dataName: curData.name,
        dataType: curData.type,
        strokeWidth: this.svg.polylineStrokeWidth,
        visibility: 'visible',
        fill: 'none'
      });
    }
    
    return polylineArr;
  }
  
  private updatePolyline(): void {
    const yDataLen = this.yData.length;
    for (let yDataIdx = 0; yDataIdx < yDataLen; yDataIdx++) {
      const curData: SortedY = this.yData[yDataIdx];
      const curPolyline: PolylineObj = this.polylineArr[yDataIdx];
      const curDataArr: ChartMetaData = curData.data.slice(this.visibleFrame.from, this.visibleFrame.to);
  
      curPolyline.points = this.calcXY(curDataArr);
    }
  }
  
  private calcXY(data: ChartMetaData): string[] {
    const pointsArr = [];
    const dataLength = data.length;
    const paddingBot = this.svg.paddingBot ? this.svg.paddingBot : 0;
    
    for (let dataIndex = 0; dataIndex < dataLength; dataIndex++) {
      const curItem = Number(data[dataIndex]);
      const pointStepGap: number = this.settings._width / (dataLength - 1);
      const xPoint = (pointStepGap * dataIndex).toFixed(4);
      // get proportional val of Y point
      let yPoint = curItem / this.settings._maxValHeight;
      yPoint *= this.settings.main.height - paddingBot;
      // turn over lines and add ver padding
      yPoint = Number((this.settings.main.height - yPoint - paddingBot).toFixed(4));

      // create lines array [x,y]
      pointsArr.push(`${xPoint} ${yPoint}`);
    }
    
    return pointsArr;
  }
}
