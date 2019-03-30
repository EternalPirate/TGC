import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import { ChartMain } from './hocComponents/ChartMain/ChartMain';
import { ChartButtons } from './hocComponents/ChartButtons/ChartButtons';
import { ChartThumb } from './hocComponents/ChartThumb/ChartThumb';
import { calcFrameArea } from './utils/frameUtils';
import { updateFrame } from './store/actions/chartFrameActions';
import { ChartProp } from './store/reducers/rootReducers/rootReducers';
import { CombinedState } from './store/reducers';
import { SortedData } from './models/dataModel';


interface AppComponentState {
    data: SortedData;
    chart: ChartProp;
}


class App extends Component<any, AppComponentState> {
    componentDidMount() {
        const xLen = this.props.data.x.data.length - 1;
    
        // init visible frame will be 20% of chart length
        const to = Math.floor(xLen * this.props.chart.initRatioPercent);
    
        // calc initial visible frame
        const frameArea = calcFrameArea(this.props.data.y, 0, to);
        
        // set initial visible frame
        this.props.updateFrame(frameArea);
    }
    
    render() {
        return (
            <React.Fragment>
              <ChartMain/>
              
              <ChartThumb/>
        
              <ChartButtons/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: CombinedState): AppComponentState => {
    return {
        data: state.rootState.data,
        chart: state.rootState.chart
    }
};

export default connect(mapStateToProps, {updateFrame})(App);
