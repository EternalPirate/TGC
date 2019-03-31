import React, { Component } from 'react';
import { connect } from 'react-redux';

import chartFrameStyle from './ChartFrame.scss';

import { FrameState } from '~/store/reducers/chartFrame/frameReducer';
import { CombinedState } from '~/store/reducers';
import { ChartProp } from '~/store/reducers/rootReducers/rootReducers';
import { ChartSvg } from '~/hocComponents/ChartMain/ChartMain';


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

interface DragEl {
	el: SVGRectElement;
	ownerSVGEl: SVGSVGElement;
	x: number;
	width: number;
	offsetX: number;
}

interface ChartFrameOwnProps {
	svg: ChartSvg;
}

interface ChartFrameStateProps {
	frameState: FrameState;
	chart: ChartProp;
}

interface ChartFrameDispatchProps {
}

type ChartFrameCombinedProps = ChartFrameOwnProps & ChartFrameStateProps & ChartFrameDispatchProps;


class ChartFrame extends Component<ChartFrameCombinedProps> {
	state = {
		rectArr: [
			{
				rectId: RectArr.LR,
				isDraggable: false,
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				fill: 'rgba(0, 191, 255, 0.05)'
			},
			{
				rectId: RectArr.RR,
				isDraggable: false,
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				fill: 'rgba(0, 191, 255, 0.05)'
			},
			{
				rectId: RectArr.DR,
				isDraggable: true,
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				fill: 'rgba(0, 0, 0, 0)'
			},
			{
				rectId: RectArr.DLR,
				isDraggable: true,
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				fill: 'rgba(0, 0, 0, 0.1)'
			},
			{
				rectId: RectArr.DRR,
				isDraggable: true,
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				fill: 'rgba(0, 0, 0, 0.1)'
			}
		]
	};
	private dragEl: DragEl | undefined;
	// draggable border init width
	private DBWidth = 14;
	// draggable rect init width
	private DRWidth: number;
	// min gap between borders
	private minBorderGap: number;
	
	
	constructor(props: ChartFrameCombinedProps) {
		super(props);
		
		this.DRWidth = this.props.chart.width * this.props.chart.initRatioPercent;
		this.minBorderGap = this.DBWidth * 4;

		this.buildDraggableFrame();
	}
	
	componentDidMount(): void {
		this.createDraggableFrameEvents();
	}
	
	
	
	componentWillUnmount() {
		this.removeDraggableFrameEvents();
	}
	
	
	private buildDraggableFrame(): void {
		// create draggable frame overlay
		const rectArrLen = this.state.rectArr.length;
		for (let rectArrIdx = 0; rectArrIdx < rectArrLen; rectArrIdx++) {
			const currRect: RectObj = this.state.rectArr[rectArrIdx];
			let initRectWidth = 0;
			let initRectX = 0;
			
			
			switch (rectArrIdx) {
				case RectArr.LR :
					initRectWidth = 0;
					initRectX = 0;
					break;
				case RectArr.RR :
					// right rect width = svg width - draggable rect width
					initRectWidth = this.props.chart.width - this.DRWidth;
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
			currRect.height = this.props.svg.height;
		}
	}
	
	private createDraggableFrameEvents(): void {
		const newRectArr: RectObj[] = this.state.rectArr.map(rect => ({ ...rect }));
		
		// add mouse/touch events
		window.addEventListener('mousedown', event => this.startDrag(event));
		window.addEventListener('mousemove', event => this.onDrag(event, newRectArr));
		window.addEventListener('mouseup', () => this.endDrag());
		window.addEventListener('mouseleave', () => this.endDrag());
		window.addEventListener('touchstart', event => this.startDrag(event));
		window.addEventListener('touchmove', event => this.onDrag(event, newRectArr));
		window.addEventListener('touchend', () => this.endDrag());
		window.addEventListener('touchleave', () => this.endDrag());
		window.addEventListener('touchcancel', () => this.endDrag());
	}
	
	private removeDraggableFrameEvents(): void {
		// remove mouse/touch events
		window.removeEventListener('mousedown', event => this.startDrag(event));
		window.removeEventListener('mousemove', event => this.onDrag(event, []));
		window.removeEventListener('mouseup', () => this.endDrag());
		window.removeEventListener('mouseleave', () => this.endDrag());
		window.removeEventListener('touchstart', event => this.startDrag(event));
		window.removeEventListener('touchmove', event => this.onDrag(event, []));
		window.removeEventListener('touchend', () => this.endDrag());
		window.removeEventListener('touchleave', () => this.endDrag());
		window.removeEventListener('touchcancel', () => this.endDrag());
	}
	
	private startDrag(event: MouseEvent | TouchEvent) {
		if (
			!(
			event
			&& event.target
			&& (event.target instanceof SVGRectElement)
			&& (event.target.ownerSVGElement instanceof SVGSVGElement)
			)
		) {
			return;
		}
		
		const rect: SVGRectElement = event.target;
		const ownerSVGElement: SVGSVGElement = event.target.ownerSVGElement;
		if (Boolean(rect.getAttribute('data-draggable'))) {
			event.preventDefault();
			// set init values
			this.dragEl = {
				el: rect,
				ownerSVGEl: ownerSVGElement,
				x: rect.x.baseVal.value,
				width: rect.width.baseVal.value,
				offsetX: this.getMouseXPosition(event, ownerSVGElement)
			};
		}
	}
	
	private onDrag(event: MouseEvent | TouchEvent, newRectArr: RectObj[]) {
		if (this.dragEl && this.dragEl.el) {
			event.preventDefault();
			const rectId = Number(this.dragEl.el.getAttribute('data-rect-id'));
			
			
			// get mouse/touch position
			const clientX: number = this.getMouseXPosition(event, this.dragEl.ownerSVGEl);
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
						if (DLRx + this.minBorderGap >= this.state.rectArr[RectArr.DRR].x) {
							return;
						}
						
						// border drag
						newRectArr[RectArr.DLR].x = DLRx;
						
						
						// move other rects according to drag border
						newRectArr[RectArr.DR].width = newRectArr[RectArr.RR].x - newRectArr[RectArr.DLR].x;
						newRectArr[RectArr.DR].x = newRectArr[RectArr.DLR].x;
						
						newRectArr[RectArr.LR].width = newRectArr[RectArr.DR].x;
					} else if (rectId === RectArr.DRR) {
						const DRRx = this.checkBorder(this.dragEl.x + translateX);
						
						// prevent cross dragging border
						if (DRRx - this.minBorderGap <= newRectArr[RectArr.DLR].x) {
							return;
						}
						
						// border drag
						newRectArr[RectArr.DRR].x = DRRx;
						
						
						// move other rects according to drag border
						newRectArr[RectArr.DR].width = newRectArr[RectArr.DRR].x - newRectArr[RectArr.DLR].x + newRectArr[RectArr.DLR].width;
						
						newRectArr[RectArr.RR].width = this.props.chart.width - newRectArr[RectArr.DRR].x;
						newRectArr[RectArr.RR].x = newRectArr[RectArr.DRR].x + newRectArr[RectArr.DRR].width;
					}
					break;
				case RectArr.DR:
					const DRx = this.checkBorder(this.dragEl.x + translateX);
					// draggable rect drag
					newRectArr[RectArr.DR].x = DRx;
					
					
					// move other rects according to drag border
					newRectArr[RectArr.LR].width = newRectArr[RectArr.DR].x;
					
					newRectArr[RectArr.RR].width =
						this.checkBorder(this.props.chart.width - (newRectArr[RectArr.DR].x + newRectArr[RectArr.DR].width));
					newRectArr[RectArr.RR].x =
						this.checkBorder(newRectArr[RectArr.DR].x + newRectArr[RectArr.DR].width);
					
					
					newRectArr[RectArr.DLR].x = newRectArr[RectArr.DR].x;
					newRectArr[RectArr.DRR].x = newRectArr[RectArr.RR].x - newRectArr[RectArr.DRR].width;
					break;
			}
			
			
			
			this.setState({
				rectArr: newRectArr
			});
			// this.calcDragEvent();
		}
	}
	
	private endDrag() {
		// unbind from dragging
		this.dragEl = undefined;
	}
	
	private calcDragEvent() {
		// get proportional FROM index
		let from = this.state.rectArr[RectArr.DR].x / this.props.chart.width;
		// get real FROM index
		from = Math.floor(this.props.chart.xLen * from);
		
		// get proportional TO index
		let to = this.state.rectArr[RectArr.RR].x / this.props.chart.width;
		// get real TO index
		to = Math.floor(this.props.chart.xLen * to);
		
		console.log({from, to});
		
		// this.props.chart.setVisibleFrame(from, to);
	}
	
	private getMouseXPosition(event: any, ownerSVGElement: SVGSVGElement): number {
		// get parent SVG matrix
		const CTM = ownerSVGElement.getScreenCTM();
		
		if (!(CTM && CTM.a && CTM.e)) {
			return 0;
		}
		
		if (event.touches) {
			// override (e) if this is touch device
			event = event.touches[0];
		}

		// calculate X position
		return (event.clientX - CTM.e) / CTM.a;
	}
	
	private checkBorder(num: number) {
		if (num <= 0) {
			return 0;
		} else if (num >= this.props.chart.width) {
			return this.props.chart.width;
		} else {
			return num;
		}
	}
	
	private createDraggableFrame(): JSX.Element[] {
		const frameArr: JSX.Element[] = [];
		
		const frameArrLen = this.state.rectArr.length;
		for (let frameArrIdx = 0; frameArrIdx < frameArrLen; frameArrIdx++) {
			const curRect = this.state.rectArr[frameArrIdx];
			frameArr.push((
				<rect
					key={curRect.rectId}
					data-draggable={curRect.isDraggable ? true : undefined}
					data-rect-id={curRect.rectId}
					x={curRect.x}
					y={curRect.y}
					width={curRect.width}
					height={curRect.height}
					fill={curRect.fill}
					cursor={curRect.isDraggable ? 'pointer' : undefined}/>
			));
		}
		
		return frameArr;
	}
	
	render() {
		console.log(this.state.rectArr);
		const rectArr: JSX.Element[] = this.createDraggableFrame();
		
		return (<g className={chartFrameStyle.g}>{rectArr}</g>)
	};
}

const mapStateToProps = (state: CombinedState) => {
	return {
		frameState: state.frameState,
		chart: state.rootState.chart
	}
};

export default connect(mapStateToProps)(ChartFrame);
