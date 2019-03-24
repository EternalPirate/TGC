import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChartEventsService, VisibleFrameObj } from '../../chart-services/chart-events.service';
import { roundUpVal } from '../../chart-utils/chart-utils';
import { ChartSvg } from '../../chart.component';

interface YLabelsObj {
  value: number;
  x: number;
  y: number;
  fontSize: number;
  fill: string;
}

@Component({
  selector: '[app-chart-y-labels]',
  templateUrl: './chart-y-labels.component.html',
  styleUrls: ['./chart-y-labels.component.scss']
})
export class ChartYLabelsComponent implements OnInit, OnDestroy {
  @Input() svg: ChartSvg;
  
  yLabelsArr: YLabelsObj[];
  
  private visibleFrame: VisibleFrameObj;
  private horNumMarginBottom = 5;
  private sub1: Subscription;
  
  
  constructor(private ces: ChartEventsService) {
    this.sub1 = this.ces
      .visibleFrameSubject
      .subscribe((visibleFrame: VisibleFrameObj) => {
        if (this.yLabelsArr && this.yLabelsArr.length > 0) {
          this.updateLabels(visibleFrame);
        }
      });
  }
  

  ngOnInit() {
    this.visibleFrame = this.ces.getVisibleFrame();
    this.yLabelsArr = this.buildLabels();
  }
  
  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
  
  private buildLabels(): YLabelsObj[] {
    const yLabelsArr = [];
    const horStep = roundUpVal(this.visibleFrame.maxValHeight / this.ces.settings.grid.yLabelsCount);

    // build horizontal lines on the data
    for (let lineIndex = 1; lineIndex <= this.ces.settings.grid.yLabelsCount; lineIndex++) {
      // evenly distribute lines from the ground
      let y = this.ces.settings.main.height / this.ces.settings.grid.yLabelsCount * lineIndex;
      y -= this.ces.settings.main.paddingBot;
      y -= this.horNumMarginBottom;

      // multiply line on proportional value
      let value = this.ces.settings.grid.yLabelsCount * horStep;
      // and show it from biggest to lowest
      value -= lineIndex * horStep;

      yLabelsArr.push({
        value,
        x: 0,
        y,
        fontSize: this.ces.settings.grid.fontSize,
        fill: 'black',
      });
    }

    return yLabelsArr;
  }
  
  private updateLabels(visibleFrame: VisibleFrameObj) {
    const horStep = roundUpVal(visibleFrame.maxValHeight / this.ces.settings.grid.yLabelsCount);
  
    const yLabelsArrLen = this.yLabelsArr.length;
    for (let yLabelsArrIdx = 0; yLabelsArrIdx < yLabelsArrLen; yLabelsArrIdx++) {
      const curItem: YLabelsObj = this.yLabelsArr[yLabelsArrIdx];
  
      // evenly distribute lines from the ground
      let y = this.ces.settings.main.height / this.ces.settings.grid.yLabelsCount * yLabelsArrIdx;
      y -= this.ces.settings.main.paddingBot;
      y -= this.horNumMarginBottom;
  
      // multiply line on proportional value
      let value = this.ces.settings.grid.yLabelsCount * horStep;
      // and show it from biggest to lowest
      value -= yLabelsArrIdx * horStep;
  
      curItem.y = y;
      curItem.value = value;
    }
  }
}
