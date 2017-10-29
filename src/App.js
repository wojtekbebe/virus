import React, { Component } from 'react';
import Simulation from './Simulation';
import PredefinedInputData from './PredefinedInputData';

export default class App extends Component {
  onParamsChange(left, right) {

    console.log('on params change')
    // TODO: troche brzydkie
    this.setState({
        left: Object.assign({}, left), // to make sure we have new object
        right: Object.assign({}, right),
    });
  }

  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return (
        <div className="container container-main">
          <div className="row header text-center">
            <h2>Model SVIR rozprzestrzeniania się infekcji</h2>
            <p>Model ilościowy rozprzestrzeniania się infekcji w populacji w zależności od wskaźnika szczepień (oraz innych parametrów)</p>
          </div>
          <div className="row">
            <PredefinedInputData onParamsChange={this.onParamsChange.bind(this)}/>
          </div>
          <div className="row">
            <Simulation predefinedParams={this.state.left}/>
            <Simulation predefinedParams={this.state.right}/>
          </div>
        </div>
    )
  }
}
