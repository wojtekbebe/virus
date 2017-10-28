import React, { Component } from 'react';
import InputParams from './InputParams';
import './App.css';

class App extends Component {
    onParamsUpdate(initialParams) {
        this.data.inputParams = initialParams;
    }

    constructor() {
        this.data = {
            inputParams: {
                // TODO: inital params
            }
        }
    }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Virus</h2>
        </div>



        <InputParams inputParams={this.data.inputParams} onParamsUpdate={this.onParamsUpdate.bind(this)} />
      </div>
    );
  }
}

export default App;
