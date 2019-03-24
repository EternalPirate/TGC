import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ChartMetaObj {
  [key: string]: string;
}

export type ChartMetaData = number[];

export interface ChartObj {
  columns: ChartMetaData[];
  colors: ChartMetaObj;
  names: ChartMetaObj;
  types: ChartMetaObj;
}

export interface SortedData {
  x: SortedX;
  y: SortedY[];
}

export interface SortedX {
  columnKey?: string;
  type?: string;
  data?: ChartMetaData;
  maxValLength?: number;
}

export interface SortedY {
  columnKey: string;
  type: string;
  color: string;
  name: string;
  data?: ChartMetaData;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: SortedData[];

  private static prepareData(data: ChartObj[]): SortedData[] {
    // modifying server data
    // to protect data from further API changes
    // here you can simply adapt new API structure if needed
    const sortedData: SortedData[] = [];
    const dataLen: number = data.length;
    for (let dataIdx = 0; dataIdx < dataLen; dataIdx++) {
      const curChartObj: ChartObj = data[dataIdx];
      const sortedX: SortedX = {};
      const sortedY: SortedY[] = [];
      
      
      // sort object keys
      for (const key in curChartObj.types) {
        if (curChartObj.types[key] === 'x') {
          sortedX.columnKey = curChartObj.types[key];
          sortedX.type = curChartObj.types[key];
        } else {
          sortedY.push({
            columnKey: key,
            type: curChartObj.types[key],
            color: curChartObj.colors[key],
            name: curChartObj.names[key],
          });
        }
      }
      
      
      // sort array data
      const columnsLen: number = curChartObj.columns.length;
      for (let columnsIdx = 0; columnsIdx < columnsLen; columnsIdx++) {
        const curColumn: (string | number)[] = curChartObj.columns[columnsIdx];
        
        
        // save x data
        if (curColumn[0] === sortedX.columnKey) {
          curColumn.shift(); // remove first string element
          sortedX.data = curColumn as number[];
          sortedX.maxValLength = Math.max(...(curColumn.map(num => num.toString().length))) - 1;
        }
        
        
        // save y data
        const sortedYLen: number = sortedY.length;
        for (let sortedYIdx = 0; sortedYIdx < sortedYLen; sortedYIdx++) {
          const curSortedY = sortedY[sortedYIdx];
          
          if (curColumn[0] === curSortedY.columnKey) {
            curColumn.shift(); // remove first string element
            curSortedY.data = curColumn as number[];
          }
        }
      }
      
      
      sortedData.push({
        x: sortedX,
        y: sortedY,
      });
    }
    
    return sortedData;
  }

  constructor(private http: HttpClient) {
    // load test data
    this.getData();
  }

  async getData(): Promise<void> {
    const data = await this.http.get('assets/data/chart_data.json').toPromise() as ChartObj[];

    this.data = AppComponent.prepareData(data);
  }
}
