import {
  Component,
  ElementRef, Input,
  OnInit
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

import { ChartEventsService } from '../../chart-services/chart-events.service';
import { ChartSvg } from '../../chart.component';

enum RectArr {
  LR, // Left Rect
  RR, // Right Rect
  DR, // Draggable Rect
  DLR, // Draggable Left Rect
  DRR, // Draggable Right Rect
}

interface RectObj {
  rectId: RectArr;
  isDraggable: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
}

@Component({
  selector: '[app-chart-frame]',
  templateUrl: './chart-frame.component.html',
  styleUrls: ['./chart-frame.component.scss']
})
export class ChartFrameComponent implements OnInit {
  @Input() svg: ChartSvg;
  
  rectArr: RectObj[] = [
    {
      rectId: RectArr.LR,
      isDraggable: false,
      x: null,
      y: null,
      width: null,
      height: null,
      fill: 'rgba(0, 191, 255, 0.05)'
    },
    {
      rectId: RectArr.RR,
      isDraggable: false,
      x: null,
      y: null,
      width: null,
      height: null,
      fill: 'rgba(0, 191, 255, 0.05)'
    },
    {
      rectId: RectArr.DR,
      isDraggable: true,
      x: null,
      y: null,
      width: null,
      height: null,
      fill: 'rgba(0, 0, 0, 0)'
    },
    {
      rectId: RectArr.DLR,
      isDraggable: true,
      x: null,
      y: null,
      width: null,
      height: null,
      fill: 'rgba(0, 0, 0, 0.1)'
    },
    {
      rectId: RectArr.DRR,
      isDraggable: true,
      x: null,
      y: null,
      width: null,
      height: null,
      fill: 'rgba(0, 0, 0, 0.1)'
    }
  ];
  private dragEl;
  // draggable border init width
  private DBWidth = 14;
  // draggable rect init width
  private DRWidth: number;
  // min gap between borders
  private minBorderGap: number;
  
  
  constructor(private ces: ChartEventsService, private el: ElementRef) {
    this.DRWidth = this.ces.width * this.ces.initRatioPercent;
    this.minBorderGap = this.DBWidth * 4;
  }
  

  ngOnInit() {
    this.buildDraggableFrame();
  }
  
  private buildDraggableFrame() {
    // create draggable frame overlay
    const rectArrLen = this.rectArr.length;
    for (let rectArrIdx = 0; rectArrIdx < rectArrLen; rectArrIdx++) {
      const currRect = this.rectArr[rectArrIdx];
      let initRectWidth = 0;
      let initRectX = 0;
  
  
      switch (rectArrIdx) {
        case RectArr.LR :
          initRectWidth = 0;
          initRectX = 0;
          break;
        case RectArr.RR :
          // right rect width = svg width - draggable rect width
          initRectWidth = this.ces.width - this.DRWidth;
          // right rect X = draggable rect width
          initRectX = this.DRWidth;
          break;
        case RectArr.DR :
          initRectWidth = this.DRWidth;
          initRectX = 0;
          break;
        case RectArr.DLR :
          initRectWidth = this.DBWidth;
          initRectX = 0;
          break;
        case RectArr.DRR :
          initRectWidth = this.DBWidth;
          // draggable right border X = draggable rect width - draggable border width
          initRectX = this.DRWidth - this.DBWidth;
          break;
      }
    
      
      currRect.x = initRectX;
      currRect.y = 0;
      currRect.width = initRectWidth;
      currRect.height = this.svg.height;
    }
  
    this.loadDraggableFrameEvents();
  }
  
  private loadDraggableFrameEvents() {
    // add mouse/touch events
  
    fromEvent(this.el.nativeElement, 'mousedown')
      .subscribe(event => {
        this.startDrag(event);
      });
    

    fromEvent(this.el.nativeElement, 'mousemove')
      .pipe(throttleTime(40))
      .subscribe(event => {
        this.onDrag(event);
      });
    

    fromEvent(this.el.nativeElement, 'mouseup')
      .subscribe(() => {
        this.endDrag();
      });
    fromEvent(this.el.nativeElement, 'mouseleave')
      .subscribe(() => {
        this.endDrag();
      });
    fromEvent(this.el.nativeElement, 'touchstart')
      .subscribe(event => {
        this.startDrag(event);
      });
  
  
    fromEvent(this.el.nativeElement, 'touchmove')
      .pipe(throttleTime(40))
      .subscribe(event => {
        this.onDrag(event);
      });
  
  
    fromEvent(this.el.nativeElement, 'touchend')
      .subscribe(() => {
        this.endDrag();
      });
    fromEvent(this.el.nativeElement, 'touchleave')
      .subscribe(() => {
        this.endDrag();
      });
    fromEvent(this.el.nativeElement, 'touchcancel')
      .subscribe(() => {
        this.endDrag();
      });
  }
  
  private startDrag(event) {
    if (Boolean(event.target.getAttribute('draggable'))) {
      event.preventDefault();
      // set init values
      this.dragEl = {
        el: event.target,
        x: event.target.x.baseVal.value,
        width: event.target.width.baseVal.value,
        offsetX: this.getMouseXPosition(event)
      };
    }
  }
  
  private onDrag(event) {
    if (this.dragEl && this.dragEl.el) {
      event.preventDefault();
      const rectId = Number(this.dragEl.el.getAttribute('data-rect-id'));
  
  
      // get mouse/touch position
      const clientX = this.getMouseXPosition(event);
      // calculate drag position
      const translateX = Math.floor(clientX - this.dragEl.offsetX);
  
      
      // check for drag el
      switch (rectId) {
        case RectArr.DLR:
        case RectArr.DRR:
          // border drag case
          if (rectId === RectArr.DLR) {
            const DLRx = this.checkBorder(this.dragEl.x + translateX);
  
            // prevent cross dragging border
            if (DLRx + this.minBorderGap >= this.rectArr[RectArr.DRR].x) {
              return;
            }
            
            // border drag
            this.rectArr[RectArr.DLR].x = DLRx;
  
  
            // move other rects according to drag border
            this.rectArr[RectArr.DR].width = this.rectArr[RectArr.RR].x - this.rectArr[RectArr.DLR].x;
            this.rectArr[RectArr.DR].x = this.rectArr[RectArr.DLR].x;
    
            this.rectArr[RectArr.LR].width = this.rectArr[RectArr.DR].x;
          } else if (rectId === RectArr.DRR) {
            const DRRx = this.checkBorder(this.dragEl.x + translateX);
  
            // prevent cross dragging border
            if (DRRx - this.minBorderGap <= this.rectArr[RectArr.DLR].x) {
              return;
            }
  
            // border drag
            this.rectArr[RectArr.DRR].x = DRRx;
  
  
            // move other rects according to drag border
            this.rectArr[RectArr.DR].width = this.rectArr[RectArr.DRR].x - this.rectArr[RectArr.DLR].x + this.rectArr[RectArr.DLR].width;
    
            this.rectArr[RectArr.RR].width = this.ces.width - this.rectArr[RectArr.DRR].x;
            this.rectArr[RectArr.RR].x = this.rectArr[RectArr.DRR].x + this.rectArr[RectArr.DRR].width;
          }
          break;
        case RectArr.DR:
          const DRx = this.checkBorder(this.dragEl.x + translateX);
          // draggable rect drag
          this.rectArr[RectArr.DR].x = DRx;
  
  
          // move other rects according to drag border
          this.rectArr[RectArr.LR].width = this.rectArr[RectArr.DR].x;
  
          this.rectArr[RectArr.RR].width =
            this.checkBorder(this.ces.width - (this.rectArr[RectArr.DR].x + this.rectArr[RectArr.DR].width));
          this.rectArr[RectArr.RR].x =
            this.checkBorder(this.rectArr[RectArr.DR].x + this.rectArr[RectArr.DR].width);
  
  
          this.rectArr[RectArr.DLR].x = this.rectArr[RectArr.DR].x;
          this.rectArr[RectArr.DRR].x = this.rectArr[RectArr.RR].x - this.rectArr[RectArr.DRR].width;
          break;
      }
  
      
      this.calcDragEvent();
    }
  }
  
  private endDrag() {
    event.preventDefault();
    // unbind from dragging
    this.dragEl = null;
  }
  
  private calcDragEvent() {
    // get proportional FROM index
    let from = this.rectArr[RectArr.DR].x / this.ces.width;
    // get real FROM index
    from = Math.floor(this.ces.xLen * from);
  
    // get proportional TO index
    let to = this.rectArr[RectArr.RR].x / this.ces.width;
    // get real TO index
    to = Math.floor(this.ces.xLen * to);
  
    this.ces.setVisibleFrame(from, to);
  }
  
  private getMouseXPosition(event) {
    // get parent SVG matrix
    const CTM = this.el.nativeElement.parentNode.getScreenCTM();
    if (event.touches) {
      // override (e) if this is touch device
      event = event.touches[0];
    }
    
    // calculate X position
    return (event.clientX - CTM.e) / CTM.a;
  }
  
  private checkBorder(num) {
    if (num <= 0) {
      return 0;
    } else if (num >= this.ces.width) {
      return this.ces.width;
    } else {
      return num;
    }
  }
}
