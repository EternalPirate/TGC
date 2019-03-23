import { Component, Input, OnInit } from '@angular/core';
import { SortedData, SortedY } from '../app.component';
import { ChartEventsService } from './chart-events.service';

export interface Settings {
  // chart width
  _width: number;
  // max data value
  _maxValHeight: number;
  // x data length
  _xLen: number;
  // init ratio percent. for points gap and frame width
  _initRatioPercent: number;
  
  // main chart
  main: {
    height: number;
    // stroke width of polyline
    polylineStrokeWidth: number;
    // vertical padding
    paddingBot: number;
  };
  // thumb chart
  thumb: {
    height: number;
    // stroke width of polyline
    polylineStrokeWidth: number;
  };
  
  grid: {
    // horizontal lines
    xLinesThickness: number;
    // horizontal labels on the data
    yLabelsCount: number;
    // font size for x/y labels
    fontSize: number;
  };
}

export interface ChartSvg {
  width: number;
  height: number;
  polylineStrokeWidth: number;
  paddingBot?: number;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  providers: [ChartEventsService]
})
export class ChartComponent implements OnInit {
  @Input() data: SortedData;
  settings: Settings = {
    // chart width will be 6 times bigger then screen
    _width: window.innerWidth,
    _maxValHeight: null,
    _xLen: null,
    _initRatioPercent: 0.2,
    
    main: {
      height: 500,
      polylineStrokeWidth: 2,
      paddingBot: 40
    },
    thumb: {
      height: 100,
      polylineStrokeWidth: 1,
    },
    grid: {
      xLinesThickness: 1,
      yLabelsCount: 6,
      fontSize: 14
    }
  };
  
  
  static roundUpVal(val: number): number {
    // round up maxVal
    val = Math.ceil(val);
    return (Number(val.toString().slice(0, 1)) + 1) // get first num + 1 of max val
      *
      Number(`1e${val.toString().length - 1}`); // 1e5 = 100000. get max val in tens/hundreds/thousands format
    
  }
  
  static calcMaxValues(yData: SortedY[]) {
    let maxValHeight = 0;
    for (let yDataIndex = 0; yDataIndex < yData.length; yDataIndex++) {
      const curyData = yData[yDataIndex];
      maxValHeight = maxValHeight < Math.max(...curyData.data) ? Math.max(...curyData.data) : maxValHeight;
    }
    
    // round up maxVal
    return ChartComponent.roundUpVal(maxValHeight);
  }
  
  
  constructor(private chartEventsService: ChartEventsService) {}
  
  
  ngOnInit() {
    this.settings._xLen = this.data.x.data.length - 1;
    this.settings._maxValHeight = ChartComponent.calcMaxValues(this.data.y);
    this.settings.main.height += this.settings.main.paddingBot;
    
    this.chartEventsService.visibleFrame.emit({
      from: 0,
      // init visible frame will be 20% of chart length
      to: Math.floor(this.settings._xLen * this.settings._initRatioPercent)
    });
  }
}
