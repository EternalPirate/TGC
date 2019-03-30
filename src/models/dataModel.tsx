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
	isVisible: boolean;
	data: ChartMetaData;
}

export interface SortedData {
	x: SortedX;
	y: SortedY[];
}
