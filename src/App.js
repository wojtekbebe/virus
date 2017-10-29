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
            <h2>Symulator "Virus"</h2>
            <p>Zobacz jak rozprzestrzenia się epidemia choroby w zależności od liczby zaszczepionych osobników w populacji.</p>
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
