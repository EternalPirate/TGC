import { Component, Input, OnInit } from '@angular/core';

import { SortedData } from '../../app.component';
import { ChartSvg } from '../chart.component';
import { ChartEventsService, VisibleFrameObj } from '../chart-services/chart-events.service';
import { calcFrameArea } from '../chart-utils/chart-utils';

@Component({
  selector: 'app-chart-thumb',
  templateUrl: './chart-thumb.component.html',
  styleUrls: ['./chart-thumb.component.scss']
})
export class ChartThumbComponent implements OnInit {
  @Input() data: SortedData;
  
  visibleFrame: VisibleFrameObj;
  viewBox: string;
  svg: ChartSvg;
  

  constructor(private ces: ChartEventsService) {}


  async ngOnInit() {
    this.svg = {
      ...this.ces.settings.thumb,
      width: this.ces.width
    };
    this.viewBox = `0 0 ${this.svg.width} ${this.svg.height}`;
    this.visibleFrame = calcFrameArea(this.data.y, 0, this.ces.xLen);
  }
}
