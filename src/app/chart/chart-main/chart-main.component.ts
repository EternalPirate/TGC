import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChartSvg, Settings } from '../chart.component';
import { ChartEventsService, VisibleFrameObj } from '../chart-events.service';
import { SortedData } from '../../app.component';

@Component({
  selector: 'app-chart-main',
  templateUrl: './chart-main.component.html',
  styleUrls: ['./chart-main.component.scss']
})
export class ChartMainComponent implements OnInit, OnDestroy {
  @Input() data: SortedData;
  @Input() settings: Settings;
  

  visibleFrame: VisibleFrameObj;
  viewBox: string;
  svg: ChartSvg;
  private sub1: Subscription;


  constructor(private chartEventsService: ChartEventsService) {
    this.sub1 = this.chartEventsService
      .visibleFrame
      .subscribe((visibleFrame: VisibleFrameObj) => {
      // need to update whole object to fire ngOnChanges in child component
      this.visibleFrame = {
        from: visibleFrame.from,
        to: visibleFrame.to
      };
    });
  }


  ngOnInit() {
    this.svg = {
      ...this.settings.main,
      width: this.settings._width
    };
    this.viewBox = `0 0 ${this.svg.width} ${this.svg.height}`;
  }
  
  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}
