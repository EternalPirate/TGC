import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChartComponent, Settings } from '../../chart.component';
import { ChartEventsService, VisibleFrameObj } from '../../chart-events.service';
import { ChartMetaData, SortedY } from '../../../app.component';

interface YLabelsObj {
  value: number;
  x: number;
  y: number;
  fontSize: number;
  fill: string;
}

@Component({
  selector: '[app-chart-grid-yLabels]',
  templateUrl: './chart-grid-yLabels.component.html',
  styleUrls: ['./chart-grid-yLabels.component.scss']
})
export class ChartGridYLabelsComponent implements OnInit, OnDestroy {
  @Input() settings: Settings;
  @Input() yData: SortedY[];
  
  
  private horNumMarginBottom = 5;
  private yLabelsArr: YLabelsObj[];
  private sub1: Subscription;
  
  
  constructor(private chartEventsService: ChartEventsService) {
    this.sub1 = this.chartEventsService
      .visibleFrame
      .subscribe((visibleFrame: VisibleFrameObj) => {
      if (this.yLabelsArr && this.yLabelsArr.length > 0) {
        this.updateLabels(visibleFrame);
      }
    });
  }
  

  ngOnInit() {
    this.yLabelsArr = this.buildLabels();
  }
  
  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
  
  private buildLabels(): YLabelsObj[] {
    const yLabelsArr = [];
    const horStep = ChartComponent.roundUpVal(this.settings._maxValHeight / this.settings.grid.yLabelsCount);

    // build horizontal lines on the data
    for (let lineIndex = 1; lineIndex <= this.settings.grid.yLabelsCount; lineIndex++) {
      // evenly distribute lines from the ground
      let y = this.settings.main.height / this.settings.grid.yLabelsCount * lineIndex;
      y -= this.settings.main.paddingBot;
      y -= this.horNumMarginBottom;

      // multiply line on proportional value
      let value = this.settings.grid.yLabelsCount * horStep;
      // and show it from biggest to lowest
      value -= lineIndex * horStep;

      yLabelsArr.push({
        value,
        x: 0,
        y,
        fontSize: this.settings.grid.fontSize,
        fill: 'black',
      });
    }

    return yLabelsArr;
  }
  
  private updateLabels(visibleFrame: VisibleFrameObj) {
    let maxValHeight = 0;
    const yDataLen = this.yData.length;
    for (let yDataIdx = 0; yDataIdx < yDataLen; yDataIdx++) {
      const curData: SortedY = this.yData[yDataIdx];
      const curDataArr: ChartMetaData = curData.data.slice(visibleFrame.from, visibleFrame.to);
      maxValHeight = maxValHeight < Math.max(...curDataArr) ? Math.max(...curDataArr) : maxValHeight;
    }
  
    const horStep = ChartComponent.roundUpVal(maxValHeight / this.settings.grid.yLabelsCount);
    this.chartEventsService.maxValHeight.emit(maxValHeight);
  
    const yLabelsArrLen = this.yLabelsArr.length;
    for (let yLabelsArrIdx = 0; yLabelsArrIdx < yLabelsArrLen; yLabelsArrIdx++) {
      const curItem: YLabelsObj = this.yLabelsArr[yLabelsArrIdx];
  
      // evenly distribute lines from the ground
      let y = this.settings.main.height / this.settings.grid.yLabelsCount * yLabelsArrIdx;
      y -= this.settings.main.paddingBot;
      y -= this.horNumMarginBottom;
  
      // multiply line on proportional value
      let value = this.settings.grid.yLabelsCount * horStep;
      // and show it from biggest to lowest
      value -= yLabelsArrIdx * horStep;
  
      curItem.y = y;
      curItem.value = value;
    }
  }
}
