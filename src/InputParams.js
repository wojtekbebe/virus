import React, { Component } from 'react';

export default class InputParams extends Component {

  onButtonClick() {
    this.props.onStartButtonClicked();
  }

  onUpdate() {
    this.props.onParamsUpdate({
        R: 5, // odporni, 0-100
        I: 10, // zarazeni
        r: 55, // zarazliwosci
        a: 99,  // wsplicznik wyleczalnosci

    })
  }

  onChange1(R) {
    this.onUpdate({ R: R });
  }


  render() {
    return (
      <div className="inputparams">
        <div className="form-group">
          <label for="infected">Procent zarażonych</label>
          <input id="infected" className="form-control" onChange={this.onChange1.bind(this)} />
        </div>
        <div className="form-group">
          <label for="immune">Procent odpornych</label>
          <input id="immune" className="form-control" onChange={this.onChange1.bind(this)} />
        </div>
        <div className="form-group">
          <label for="ratio1">Współczynnik zaraźliwości</label>
          <input id="ratio1" className="form-control" onChange={this.onChange1.bind(this)} />
        </div>
        <div className="form-group">
          <label for="ratio2">Współczynnik wyleczalnosci</label>
          <input id="ratio2" className="form-control" onChange={this.onChange1.bind(this)} />
        </div>
        <button onClick={this.onButtonClick.bind(this)}>Rozpocznij symulację</button>
      </div>
    )
  }
}
