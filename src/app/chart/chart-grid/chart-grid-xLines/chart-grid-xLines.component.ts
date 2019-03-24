import { Component, Input, OnInit } from '@angular/core';

import { SortedData } from '../../../app.component';
import { ChartSvg, Settings } from '../../chart.component';

interface LineObj {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  stroke: string;
  strokeWidth: number;
}

@Component({
  selector: '[app-chart-grid-xLines]',
  templateUrl: './chart-grid-xLines.component.html',
  styleUrls: ['./chart-grid-xLines.component.scss']
})
export class ChartGridXLinesComponent implements OnInit {
  @Input() data: SortedData;
  @Input() settings: Settings;
  @Input() svg: ChartSvg;
  
  
  linesArr: LineObj[];
  
  
  constructor() {
  }
  
  
  ngOnInit() {
    this.linesArr = this.buildLines();
  }
  
  
  private buildLines(): LineObj[] {
    const linesArr = [];
    for (let lineIndex = 1; lineIndex <= this.settings.grid.yLabelsCount; lineIndex++) {
      // evenly distribute lines from the ground
      let lineGap = this.svg.height / this.settings.grid.yLabelsCount * lineIndex;
      lineGap -= this.settings.main.paddingBot;
      lineGap += this.settings.grid.xLinesThickness;
      
      linesArr.push({
        x1: 0,
        x2: this.svg.width,
        y1: lineGap,
        y2: lineGap,
        stroke: '#e8e8e8',
        strokeWidth: this.settings.grid.xLinesThickness
      });
    }
    
    return linesArr;
  }
}
