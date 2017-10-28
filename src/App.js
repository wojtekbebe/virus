import React, { Component } from 'react';
import InputParams from './InputParams';
import './App.css';
import { LinearEngine } from "./models/LinearEngine";
import LinearGraph from "./LinearGraph";

class App extends Component {
    onParamsUpdate(initialParams) {
        this.data.inputParams = initialParams;
    }

    onStartButtonClicked() {
        const engine = new LinearEngine();
        engine.setParams(this.data.inputParams);

        this.graphData = engine.getGraphData();
    }

    constructor(...args) {
        super(...args);

        this.data = {
            inputParams: {
                // TODO: inital params
            }
        };

        this.graphData = null;
    }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Virus</h2>
        </div>


          <LinearGraph graphData={this.graphData} />

        <InputParams inputParams={this.data.inputParams} onStartButtonClicked={this.onStartButtonClicked.bind(this)} onParamsUpdate={this.onParamsUpdate.bind(this)} />
      </div>
    );
  }
}

export default App;
