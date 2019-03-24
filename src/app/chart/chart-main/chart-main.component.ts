import { Component, Input, OnInit } from '@angular/core';

import { ChartSvg } from '../chart.component';
import { ChartEventsService, VisibleFrameObj } from '../chart-services/chart-events.service';
import { SortedData } from '../../app.component';

@Component({
  selector: 'app-chart-main',
  templateUrl: './chart-main.component.html',
  styleUrls: ['./chart-main.component.scss']
})
export class ChartMainComponent implements OnInit {
  @Input() data: SortedData;
  

  visibleFrame: VisibleFrameObj;
  viewBox: string;
  svg: ChartSvg;
  
  
  constructor(private ces: ChartEventsService) {}


  ngOnInit() {
    this.svg = {
      ...this.ces.settings.main,
      width: this.ces.width
    };
    this.viewBox = `0 0 ${this.svg.width} ${this.svg.height}`;
    this.visibleFrame = this.ces.getVisibleFrame();
  }
}
