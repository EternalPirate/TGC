import React, { Component } from 'react';
import { Dispatch, bindActionCreators, Action } from 'redux';
import { connect } from 'react-redux';

import appStyle from '~/App.scss';

import ChartMain from '~/hocComponents/ChartMain/ChartMain';
import ChartThumb from '~/hocComponents/ChartThumb/ChartThumb';
import ChartButtons from '~/hocComponents/ChartButtons/ChartButtons';
import { calcFrameArea } from '~/utils/frameUtils';
import { updateFrame } from '~/store/actions/chartFrameActions';
import { ChartProp } from '~/store/reducers/rootReducers/rootReducers';
import { CombinedState } from '~/store/reducers';
import { SortedData } from '~/models/dataModel';
import { FrameState } from '~/store/reducers/chartFrame/frameReducer';
import { updateChart } from '~/store/actions/rootActions';


interface AppComponentOwnProps {
}

interface AppComponentStateProps {
    data: SortedData;
    chart: ChartProp;
}

interface AppComponentDispatchProps {
    updateFrame: (frameArea: FrameState) => void;
    updateChart: (chart: ChartProp) => void;
}

type AppComponentCombinedProps = AppComponentOwnProps & AppComponentStateProps & AppComponentDispatchProps;


class App extends Component<AppComponentCombinedProps> {
    componentDidMount() {
        // get x axis length
        const xLen = this.props.data.x.data.length - 1;
    
        // init visible frame will be 20% of chart length
        const to = Math.floor(xLen * this.props.chart.initRatioPercent);
    
        // calc initial visible frame
        const frameArea = calcFrameArea(this.props.data.y, 0, to);
    
        // set initial visible frame
        this.props.updateFrame(frameArea);
        // set initial x axis length
        this.props.updateChart({
            ...this.props.chart,
            xLen
        });
    }
    
    render() {
        return (
            <div className={appStyle.App}>
              <ChartMain/>
              
              <ChartThumb/>
        
              <ChartButtons/>
            </div>
        );
    }
}

const mapStateToProps = (state: CombinedState): AppComponentStateProps => ({
    data: state.rootState.data,
    chart: state.rootState.chart
});

const mapDispatchToProps = (dispatch: Dispatch<Action<AppComponentDispatchProps>>) => bindActionCreators({
    updateFrame: updateFrame,
    updateChart: updateChart
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(App);
