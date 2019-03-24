import { Component, Input, OnInit } from '@angular/core';

import { SortedData } from '../../app.component';
import { ChartSvg, Settings } from '../chart.component';
import { VisibleFrameObj } from '../chart-events.service';

@Component({
  selector: 'app-chart-thumb',
  templateUrl: './chart-thumb.component.html',
  styleUrls: ['./chart-thumb.component.scss']
})
export class ChartThumbComponent implements OnInit {
  @Input() data: SortedData;
  @Input() settings: Settings;
  
  visibleFrame: VisibleFrameObj;
  viewBox: string;
  svg: ChartSvg;
  

  constructor() {}


  async ngOnInit() {
    this.svg = {
      ...this.settings.thumb,
      width: this.settings._width
    };
    this.viewBox = `0 0 ${this.settings._width} ${this.settings.main.height}`;
    this.visibleFrame = {
      from: 0,
      to: this.settings._xLen
    };
  }
}
