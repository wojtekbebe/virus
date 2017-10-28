import React, {Component} from 'react';
import './App.css';
import LinearEngine from "./models/LinearEngine";
import Heatmap from 'react-heatmap';
import LinearGraph from "./LinearGraph";
import InputParams from './InputParams';

import RandomHeatEngine from "./models/RandomHeatEngine";

class Simulation extends Component {
    onParamsUpdate(inputParams) {
        this.setState(Object.assign(
            {},
            this.state,
            {
                inputParams: Object.assign({}, this.state.inputParams, inputParams),
            }
            )
        );
    }

    onStartButtonClicked() {
        const linearEngine = new LinearEngine(
            this.state.inputParams.I,
            this.state.inputParams.R,
            this.state.inputParams.V,
            this.state.inputParams.r,
            this.state.inputParams.a,
        );

        const heatEngine = new RandomHeatEngine(
            this.state.inputParams.I,
            this.state.inputParams.R,
            this.state.inputParams.V,
            this.state.inputParams.r,
            this.state.inputParams.a,
        );

        this.setState(Object.assign(
                {},
                this.state,
                {
                    graphData: linearEngine.getGraphData(),
                    heatData: heatEngine.getHeatData(+new Date),
                }
            )
        );
    }

    constructor(...args) {
        super(...args);

        this.state = {
            graphData: [],

            inputParams: {
                I: 10,
                R: 10,
                V: 10,
                r: 0.3,
                a: 0.4,
            },
            heatData: [],
        };

        this.heatContainerStyle = {
            width: "500px",
            height: "500px",
        }

    }

    render() {
        return (
            <div className="col-md-6">
                <InputParams inputParams={this.state.inputParams}
                             onStartButtonClicked={this.onStartButtonClicked.bind(this)}
                             onParamsUpdate={this.onParamsUpdate.bind(this)}/>
                <div className="col-md-12 left-box-lightblue">
                    <LinearGraph graphData={this.state.graphData}/>
                </div>
                <div className="col-md-12 left-box-lightcoral">
                    <Heatmap height={200} width={300} max={1} unit="pixels" data={this.state.heatData}/>
                </div>
            </div>
        );
    }
}

export default Simulation;
