import { Component, Input, OnInit } from '@angular/core';

import { SortedData } from '../../../app.component';
import { ChartSvg } from '../../chart.component';
import { ChartEventsService } from '../../chart-services/chart-events.service';

interface LineObj {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  stroke: string;
  strokeWidth: number;
}

@Component({
  selector: '[app-chart-x-lines]',
  templateUrl: './chart-x-lines.component.html',
  styleUrls: ['./chart-x-lines.component.scss']
})
export class ChartXLinesComponent implements OnInit {
  @Input() data: SortedData;
  @Input() svg: ChartSvg;
  
  
  linesArr: LineObj[];
  
  
  constructor(private ces: ChartEventsService) {
  }
  
  
  ngOnInit() {
    this.linesArr = this.buildLines();
  }
  
  
  private buildLines(): LineObj[] {
    const linesArr = [];
    for (let lineIndex = 1; lineIndex <= this.ces.settings.grid.yLabelsCount; lineIndex++) {
      // evenly distribute lines from the ground
      let lineGap = this.svg.height / this.ces.settings.grid.yLabelsCount * lineIndex;
      lineGap -= this.ces.settings.main.paddingBot;
      lineGap += this.ces.settings.grid.xLinesThickness;
      
      linesArr.push({
        x1: 0,
        x2: this.svg.width,
        y1: lineGap,
        y2: lineGap,
        stroke: '#e8e8e8',
        strokeWidth: this.ces.settings.grid.xLinesThickness
      });
    }
    
    return linesArr;
  }
}
