import { SortedData } from '~/models/dataModel';

export interface Settings {
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

export interface ChartProp {
	// chart width
	width: number;
	// x data length
	xLen: number;
	// init ratio percent. for points gap and frame width
	initRatioPercent: number;
}

export interface RootState {
	data: SortedData;
	chart: ChartProp;
	settings: Settings;
}


const initState: RootState = {
	data: {
			x: {
				columnKey: 'x',
				type: 'x',
				data: [
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					10,
					11,
					12,
					13,
					14,
					15,
					16,
					17,
					18,
					19,
					20,
					21,
					22,
					23,
					24,
					25,
					26,
					27,
					28,
					29,
					30,
					31,
					32,
					33,
					34,
					35,
					36,
					37,
					38,
					39,
					40,
					41,
					42,
					43,
					44,
					45,
					46,
					47,
					48,
					49,
					50,
					51,
					52,
					53,
					54,
					55,
					56,
					57,
					58,
					59,
					60,
					61,
					62,
					63,
					64,
					65,
					66,
					67,
					68,
					69,
					70,
					71,
					72,
					73,
					74,
					75,
					76,
					77,
					78,
					79,
					80,
					81,
					82,
					83,
					84,
					85,
					86,
					87,
					88,
					89,
					90,
					91,
					92,
					93,
					94,
					95,
					96,
					97,
					98,
					99
				],
				maxValLength: 0
			},
			y: [
				{
					columnKey: 'y0',
					type: 'line',
					color: '#3DC23F',
					name: '#0',
					isVisible: true,
					data: [
							1,
							2,
							3,
							4,
							5,
							6,
							7,
							8,
							9,
							10,
							11,
							12,
							13,
							14,
							15,
							16,
							17,
							18,
							19,
							20,
							21,
							22,
							23,
							24,
							25,
							26,
							27,
							28,
							29,
							30,
							31,
							32,
							33,
							34,
							35,
							36,
							37,
							38,
							39,
							40,
							41,
							42,
							43,
							44,
							45,
							46,
							47,
							48,
							49,
							50,
							51,
							52,
							53,
							54,
							55,
							56,
							57,
							58,
							59,
							60,
							61,
							62,
							63,
							64,
							65,
							66,
							67,
							68,
							69,
							70,
							71,
							72,
							73,
							74,
							75,
							76,
							77,
							78,
							79,
							80,
							81,
							82,
							83,
							84,
							85,
							86,
							87,
							88,
							89,
							90,
							91,
							92,
							93,
							94,
							95,
							96,
							97,
							98,
							99
						]
				},
				{
					columnKey: 'y1',
					type: 'line',
					color: '#F34C44',
					name: '#1',
					isVisible: true,
					data: [
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0,
							499,
							0,
							0,
							0,
							0
						]
				}
			]
		},

	chart: {
		width: window.innerWidth,
		xLen: 0,
		initRatioPercent: 0.2
	},
	
	settings: {
		main: {
			height: 500,
			polylineStrokeWidth: 2,
			paddingBot: 40
		},

		thumb: {
			height: 100,
			polylineStrokeWidth: 1
		},
		
		grid: {
			xLinesThickness: 1,
			yLabelsCount: 6,
			fontSize: 14
		}
	}
};

export const rootReducers = (state: RootState = initState, action: any): RootState => {
	switch (action.type) {
		default:
			return state;
	}
};
