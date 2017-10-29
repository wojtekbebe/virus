import React, { Component } from 'react';
import Simulation from './Simulation';
import PredefinedInputData from './PredefinedInputData';

export default class App extends Component {
  onParamsChange(left, right) {

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
            <p>Model ilościowy rozprzestrzeniania się infekcji w populacji w zależności od wskaźnika szczepień (oraz innych parametrów). Wyraźnie widać ograniczenie i możliwą eradykację infekcji ze szczepionych populacji, w porównaniu do populacji z niskim wskaźnikiem szczepień w której zawsze będziemy mieli rezerwuar zakażających osobników</p>
            <p>Model oparty jest o opracowanie: <a target="blank" href="http://izt.ciens.ucv.ve/ecologia/Archivos/ECO_POB%202008/ECOPO6_2008/Liu%20y%20col_II%202008.pdf">link</a></p>

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
