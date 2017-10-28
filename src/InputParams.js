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

  onChange2(I) {
    this.onUpdate({ I: I });
  }

  onChange3(r) {
    this.onUpdate({ r: r });
  }

  onChange4(a) {
    this.onUpdate({ a: a });
  }


  render() {
    return (
      <div className="inputparams">
        <div className="form-group">
          <label for="resistant">Procent odpornych</label>
          <input id="resistant" className="form-control" onChange={this.onChange1.bind(this)} />
        </div>
        <div className="form-group">
          <label for="infectious">Procent zarażonych</label>
          <input id="infectious" className="form-control" onChange={this.onChange2.bind(this)} />
        </div>
        <div className="form-group">
          <label for="rate1">Współczynnik zaraźliwości</label>
          <input id="rate1" className="form-control" onChange={this.onChange3.bind(this)} />
        </div>
        <div className="form-group">
          <label for="rate2">Współczynnik wyleczalnosci</label>
          <input id="rate2" className="form-control" onChange={this.onChange4.bind(this)} />
        </div>
        <button onClick={this.onButtonClick.bind(this)}>Rozpocznij symulację</button>
      </div>
    )
  }
}
