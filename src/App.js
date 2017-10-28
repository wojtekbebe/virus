import React, { Component } from 'react';
import InputParams from './InputParams';
import './App.css';

class App extends Component {
    onParamsUpdate(params) {
        console.log('params updated: ', params);
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>

          <InputParams onParamsUpdate={this.onParamsUpdate.bind(this)} />
      </div>
    );
  }
}

export default App;
