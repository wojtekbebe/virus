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
                    inputParams,
                }
            )
        )
    }

    onStartButtonClicked() {
        const engine = new LinearEngine(10, 10);

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
                R: 0.1,
                I: 0.2,
                r: 0.3,
                a: 0.4,
            }
        };
    }


    render() {
        return (
            <div class="container container-main">
                <div class="row">
                    <div class="col-md-7">
                        <div class="col-md-12 left-box-lightblue">
                            <LinearGraph graphData={this.state.graphData}/>
                        </div>
                        <div class="col-md-12 left-box-lightcoral"></div>
                        <div class="col-md-12 left-box-lightseagreen"></div>
                    </div>
                    <InputParams inputParams={this.inputParams}
                                 onStartButtonClicked={this.onStartButtonClicked.bind(this)}
                                 onParamsUpdate={this.onParamsUpdate.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default App;
