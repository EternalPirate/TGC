import { Component, Input, OnInit } from '@angular/core';

import { SortedData } from '../../app.component';
import { ChartSvg, Settings } from '../chart.component';

@Component({
  selector: '[app-chart-grid]',
  templateUrl: './chart-grid.component.html',
  styleUrls: ['./chart-grid.component.scss']
})
export class ChartGridComponent implements OnInit {
  @Input() data: SortedData;
  @Input() settings: Settings;
  @Input() svg: ChartSvg;


  constructor() { }


  ngOnInit() {
  }
}
