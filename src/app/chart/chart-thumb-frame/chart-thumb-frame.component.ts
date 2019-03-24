import {
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

import { Settings } from '../chart.component';
import { ChartEventsService, VisibleFrameObj } from '../chart-events.service';

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
  selector: '[app-chart-thumb-frame]',
  templateUrl: './chart-thumb-frame.component.html',
  styleUrls: ['./chart-thumb-frame.component.scss']
})
export class ChartThumbFrameComponent implements OnInit {
  @Input() settings: Settings;
  @Input() visibleFrame: VisibleFrameObj;
  
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
  
  
  constructor(private chartEventsService: ChartEventsService, private el: ElementRef) {}
  

  ngOnInit() {
    this.buildDraggableFrame();
  }
  
  private buildDraggableFrame() {
    // draggable border init width
    const DBWidth = 14;
    // draggable rect init width
    const DRWidth = this.settings._width * this.settings._initRatioPercent;
  
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
          initRectWidth = this.settings._width - DRWidth;
          // right rect X = draggable rect width
          initRectX = DRWidth;
          break;
        case RectArr.DR :
          initRectWidth = DRWidth;
          initRectX = 0;
          break;
        case RectArr.DLR :
          initRectWidth = DBWidth;
          initRectX = 0;
          break;
        case RectArr.DRR :
          initRectWidth = DBWidth;
          // draggable right border X = draggable rect width - draggable border width
          initRectX = DRWidth - DBWidth;
          break;
      }
    
      
      currRect.x = initRectX;
      currRect.y = 0;
      currRect.width = initRectWidth;
      currRect.height = this.settings.main.height;
    }
  
    this.loadDraggableFrameEvents();
  }
  
  private loadDraggableFrameEvents() {
    // add mouse/touch events
    
    this.el.nativeElement.addEventListener('mousedown', (event) => {
      this.startDrag(event);
    });
    this.el.nativeElement.addEventListener('mousemove', (event) => {
      this.onDrag(event);
    });
    this.el.nativeElement.addEventListener('mouseup', () => {
      this.endDrag();
    });
    this.el.nativeElement.addEventListener('mouseleave', () => {
      this.endDrag();
    });
    this.el.nativeElement.addEventListener('touchstart', (event) => {
      this.startDrag(event);
    });
    this.el.nativeElement.addEventListener('touchmove', (event) => {
      this.onDrag(event);
    });
    this.el.nativeElement.addEventListener('touchend', () => {
      this.endDrag();
    });
    this.el.nativeElement.addEventListener('touchleave', () => {
      this.endDrag();
    });
    this.el.nativeElement.addEventListener('touchcancel', () => {
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
  
  
      this.rectArr[rectId].x = this.checkBorder(this.dragEl.x + translateX);
  
      
      switch (rectId) {
        case RectArr.DLR:
        case RectArr.DRR:
          // border drag
          // move borders according to drag el
          if (rectId === RectArr.DLR) {
            this.rectArr[RectArr.DR].width = this.rectArr[RectArr.RR].x - this.rectArr[RectArr.DLR].x;
            this.rectArr[RectArr.DR].x = this.rectArr[RectArr.DLR].x;
    
            // move sides according to drag el
            this.rectArr[RectArr.LR].width = this.rectArr[RectArr.DR].x;
          } else if (rectId === RectArr.DRR) {
            this.rectArr[RectArr.DR].width = this.rectArr[RectArr.DRR].x - this.rectArr[RectArr.DLR].x + this.rectArr[RectArr.DLR].width;
    
            // move sides according to drag el
            this.rectArr[RectArr.RR].width = this.settings._width - this.rectArr[RectArr.DRR].x;
            this.rectArr[RectArr.RR].x = this.rectArr[RectArr.DRR].x + this.rectArr[RectArr.DRR].width;
          }
          break;
        case RectArr.DR:
          // rect drag
          // move sides according to drag el
          this.rectArr[RectArr.LR].width = this.rectArr[RectArr.DR].x;
  
          this.rectArr[RectArr.RR].width =
            this.checkBorder(this.settings._width - (this.rectArr[RectArr.DR].x + this.rectArr[RectArr.DR].width));
          this.rectArr[RectArr.RR].x =
            this.checkBorder(this.rectArr[RectArr.DR].x + this.rectArr[RectArr.DR].width);
  
  
          // move borders according to drag el
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
    let from = this.rectArr[RectArr.DR].x / this.settings._width;
    // get real FROM index
    from = Math.floor(this.settings._xLen * from);
  
    // get proportional TO index
    let to = this.rectArr[RectArr.RR].x / this.settings._width;
    // get real TO index
    to = Math.floor(this.settings._xLen * to);
  
    this.chartEventsService.visibleFrame.emit({from, to});
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
    } else if (num >= this.settings._width) {
      return this.settings._width;
    } else {
      return num;
    }
  }
}
