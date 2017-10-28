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

  resistantValue(event) { //Procent odpornych
    this.params.R = event.target.value;
    this.onUpdate();
  }

  infectiousValue(event) { //Procent zarażonych
    this.params.I = event.target.value;
    this.onUpdate();
  }

  infectiousRateValue(event) { //Współczynnik zaraźliwości
    this.params.r = event.target.value;
    this.onUpdate();
  }

  curabilityRateValue(event) { //Współczynnik wyleczalności
    this.params.a = event.target.value;
    this.onUpdate();
  }


  render() {
    return (
      <div className="inputparams">
        <div className="form-group">
          <label htmlFor="resistant">Procent odpornych</label>
          <input id="resistant" className="form-control" onChange={this.resistantValue.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="infectious">Procent zarażonych</label>
          <input id="infectious" className="form-control" onChange={this.infectiousValue.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="infectiousRate">Współczynnik zaraźliwości</label>
          <input id="infectiousRate" className="form-control" onChange={this.infectiousRateValue.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="curabilityRate">Współczynnik wyleczalności</label>
          <input id="curabilityRate" className="form-control" onChange={this.curabilityRateValue.bind(this)} />
        </div>
        <button onClick={this.onButtonClick.bind(this)}>Rozpocznij symulację</button>
      </div>
    )
  }
}
