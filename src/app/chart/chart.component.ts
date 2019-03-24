import { Component, Input, OnInit } from '@angular/core';
import { SortedData } from '../app.component';
import { ChartEventsService } from './chart-services/chart-events.service';

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
  
  
  constructor(private ces: ChartEventsService) {}
  
  
  ngOnInit() {
    this.ces.init(this.data);
  }
}
