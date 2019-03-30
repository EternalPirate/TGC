import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import { ChartMain } from './hocComponents/ChartMain/ChartMain';
import { ChartButtons } from './hocComponents/ChartButtons/ChartButtons';
import { ChartThumb } from './hocComponents/ChartThumb/ChartThumb';
import { calcFrameArea } from './utils/frameUtils';
import { updateFrame } from './store/actions/chartFrameActions';
import { Settings } from './store/reducers/rootReducers/rootReducers';
import { CombinedState } from './store/reducers';


class App extends Component<any, Settings> {
    componentDidMount() {
        const xLen = this.props.rootState.data.x.data.length - 1;
        // this.props.settings.main.height += settings.main.paddingBot;
    
        // init visible frame will be 20% of chart length
        const to = Math.floor(xLen * this.props.rootState.chart.initRatioPercent);
    
        const frameArea = calcFrameArea(this.props.rootState.data.y, 0, to);
        
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

const mapStateToProps = (state: CombinedState) => {
    return { ...state }
};

export default connect(mapStateToProps, {updateFrame})(App);
