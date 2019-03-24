import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartMainComponent } from './chart/chart-main/chart-main.component';
import { ChartComponent } from './chart/chart.component';
import { ChartThumbComponent } from './chart/chart-thumb/chart-thumb.component';
import { ChartButtonsComponent } from './chart/chart-buttons/chart-buttons.component';
import { ChartPolylineComponent } from './chart/chart-elements/chart-polyline/chart-polyline.component';
import { ChartFrameComponent } from './chart/chart-elements/chart-frame/chart-frame.component';
import { ChartXLinesComponent } from './chart/chart-elements/chart-x-lines/chart-x-lines.component';
import { ChartXLabelsComponent } from './chart/chart-elements/chart-x-labels/chart-x-labels.component';
import { ChartYLabelsComponent } from './chart/chart-elements/chart-y-labels/chart-y-labels.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartMainComponent,
    ChartComponent,
    ChartThumbComponent,
    ChartButtonsComponent,
    ChartXLabelsComponent,
    ChartYLabelsComponent,
    ChartPolylineComponent,
    ChartFrameComponent,
    ChartXLinesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
