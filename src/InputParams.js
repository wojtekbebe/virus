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

    vaccinatedValue(event) { //Procent szczepionych
        this.params.V = event.target.value;
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
        const deafultValue = this.props.inputParams || {};
        return (
            <div className="col-md-4 col-md-offset-1">
                <div className="form-group">
                    <label htmlFor="resistant">Procent odpornych</label>
                    <input value={deafultValue.R} id="resistant" className="form-control" onChange={this.resistantValue.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="infectious">Procent zarażonych</label>
                    <input value={deafultValue.I} id="infectious" className="form-control" onChange={this.infectiousValue.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="infectious">Procent zaszczepionych</label>
                    <input value={deafultValue.V} id="infectious" className="form-control" onChange={this.vaccinatedValue.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="rate1">Współczynnik zaraźliwości</label>
                    <input value={deafultValue.r} id="rate1" className="form-control" onChange={this.infectiousRateValue.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="rate2">Współczynnik wyleczalnosci</label>
                    <input value={deafultValue.a} id="rate2" className="form-control" onChange={this.curabilityRateValue.bind(this)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onButtonClick.bind(this)}>Rozpocznij symulację</button>
            </div>
        )
    }
}
