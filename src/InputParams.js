import React, { Component } from 'react';

export default class InputParams extends Component {

    constructor(...args) {
        super(...args);

        this.params = {

        };
    }

  onButtonClick() {
    this.props.onStartButtonClicked();
  }

  onUpdate() {
    this.props.onParamsUpdate(this.params);
  }

  onChange1(event) {
    this.params.R = event.target.value;
    this.onUpdate();
  }

  onChange2(I) {
    this.params.I = I;
    this.onUpdate();
  }

  onChange3(r) {
    this.params.r = r;
    this.onUpdate();
  }

  onChange4(a) {
    this.params.a = a;
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
