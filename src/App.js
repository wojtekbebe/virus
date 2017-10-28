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
        const engine = new LinearEngine(0.1, 0.1);

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
        };
    }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Virus</h2>
        </div>


        <LinearGraph graphData={this.state.graphData} />

        <InputParams inputParams={this.inputParams} onStartButtonClicked={this.onStartButtonClicked.bind(this)} onParamsUpdate={this.onParamsUpdate.bind(this)} />
      </div>
    );
  }
}

export default App;
