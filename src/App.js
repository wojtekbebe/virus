import React, {Component} from 'react';
import InputParams from './InputParams';
import './App.css';
import LinearEngine from "./models/LinearEngine";
import LinearGraph from "./LinearGraph";


class App extends Component {
    onParamsUpdate(inputParams) {
        console.log('params: ', inputParams);
        this.setState(Object.assign(
                {},
                this.state,
                {
                    inputParams: Object.assign({}, this.state.inputParams, inputParams),
                }
            )
        )
    }

    onStartButtonClicked() {
        const engine = new LinearEngine(
            this.state.inputParams.I,
            this.state.inputParams.R,
            this.state.inputParams.r,
            this.state.inputParams.a,
        );

        this.setState(Object.assign(
            {},
            this.state,
            {
                graphData: engine.getGraphData(),
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
                r: 0.3,
                a: 0.4,
            }
        };
    }


    render() {
        return (
            <div className="container container-main">
                <div className="row">
                    <div className="col-md-7">
                        <div className="col-md-12 left-box-lightblue">
                            <LinearGraph graphData={this.state.graphData}/>
                        </div>
                        <div className="col-md-12 left-box-lightcoral"></div>
                        <div className="col-md-12 left-box-lightseagreen"></div>
                    </div>
                    <InputParams inputParams={this.state.inputParams}
                                 onStartButtonClicked={this.onStartButtonClicked.bind(this)}
                                 onParamsUpdate={this.onParamsUpdate.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default App;
