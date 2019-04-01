import { ChartProp } from '~/store/reducers/rootReducers/rootReducers';

export const UPDATE_CHART_PROPS = 'UPDATE_CHART_PROPS';

export const updateChart = (chartProp: ChartProp) => ({type: UPDATE_CHART_PROPS, payload: chartProp});
