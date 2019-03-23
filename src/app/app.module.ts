import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartMainComponent } from './chart/chart-main/chart-main.component';
import { ChartComponent } from './chart/chart.component';
import { ChartThumbComponent } from './chart/chart-thumb/chart-thumb.component';
import { ChartButtonsComponent } from './chart/chart-buttons/chart-buttons.component';
import { ChartGridComponent } from './chart/chart-grid/chart-grid.component';
import { ChartGridYLabelsComponent } from './chart/chart-grid/chart-grid-ylabels/chart-grid-yLabels.component';
import { ChartPolylineComponent } from './chart/chart-polyline/chart-polyline.component';
import { ChartThumbFrameComponent } from './chart/chart-thumb-frame/chart-thumb-frame.component';
import { ChartGridXLabelsComponent } from './chart/chart-grid/chart-grid-xlabels/chart-grid-xLabels.component';
import { ChartGridXLinesComponent } from './chart/chart-grid/chart-grid-xLines/chart-grid-xLines.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartMainComponent,
    ChartComponent,
    ChartThumbComponent,
    ChartButtonsComponent,
    ChartGridComponent,
    ChartGridXLabelsComponent,
    ChartGridYLabelsComponent,
    ChartPolylineComponent,
    ChartThumbFrameComponent,
    ChartGridXLinesComponent
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
