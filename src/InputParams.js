import React, {Component} from 'react';

export default class InputParams extends Component {

    constructor(...args) {
        super(...args);

        this.params = {};
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
            <div class="col-md-4 col-md-offset-1">
                <form>
                    <div className="form-group">
                        <label for="resistant">Procent odpornych</label>
                        <input id="resistant" className="form-control" onChange={this.resistantValue.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label for="infectious">Procent zarażonych</label>
                        <input id="infectious" className="form-control" onChange={this.infectiousValue.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label for="rate1">Współczynnik zaraźliwości</label>
                        <input id="rate1" className="form-control" onChange={this.infectiousRateValue.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label for="rate2">Współczynnik wyleczalnosci</label>
                        <input id="rate2" className="form-control" onChange={this.curabilityRateValue.bind(this)}/>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.onButtonClick.bind(this)}>Rozpocznij symulację</button>
                </form>
            </div>
        )
    }
}
