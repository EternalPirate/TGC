import { Component, Input, OnInit } from '@angular/core';

import { SortedData } from '../../app.component';
import { Settings } from '../chart.component';
import { ChartEventsService } from '../chart-events.service';

export interface ButtonsObj {
  name: string;
  color: string;
  isVisible: boolean;
}

@Component({
  selector: 'app-chart-buttons',
  templateUrl: './chart-buttons.component.html',
  styleUrls: ['./chart-buttons.component.scss']
})
export class ChartButtonsComponent implements OnInit {
  @Input() data: SortedData;
  @Input() settings: Settings;
  
  private buttonsArr: ButtonsObj[];
  
  
  constructor(private chartEventsService: ChartEventsService) { }
  
  
  ngOnInit() {
    this.buttonsArr = this.buildButtons();
  }
  
  private togglePath(button: ButtonsObj, index: number) {
    button.isVisible = !button.isVisible;
    this.chartEventsService.togglePolyline.emit({
      index,
      isVisible: button.isVisible
    });
  }
  
  private buildButtons(): ButtonsObj[] {
    const buttonsArr: ButtonsObj[] = [];

    // build buttons based on polyline
    const yDataLength = this.data.y.length;
    for (let pathIndex = 0; pathIndex < yDataLength; pathIndex++) {
      const curPolyline = this.data.y[pathIndex];
  
      buttonsArr.push({
        name: curPolyline.name,
        color: curPolyline.color,
        isVisible: true
      });
    }
    
    return buttonsArr;
  }
}
