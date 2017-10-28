import React, { Component } from 'react';
import InputParams from './InputParams';
import './App.css';
import LinearEngine from "./models/LinearEngine";
import LinearGraph from "./LinearGraph";

class App extends Component {
    onParamsUpdate(params) {
        console.log('params: ', params);
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
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Virus</h2>
        </div>

        <LinearGraph graphData={this.state.graphData} />

        <InputParams inputParams={this.state.inputParams} onStartButtonClicked={this.onStartButtonClicked.bind(this)} onParamsUpdate={this.onParamsUpdate.bind(this)} />
      </div>
    );
  }
}

export default App;
