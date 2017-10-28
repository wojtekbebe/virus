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
        const defaultValue = this.props.inputParams || {};
        return (
            <div className="col-md-12 set-border">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="resistant">Procent odpornych</label>
                            <input value={defaultValue.R} id="resistant" className="form-control" onChange={this.resistantValue.bind(this)}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="infectious">Procent zarażonych</label>
                            <input value={defaultValue.I} id="infectious" className="form-control" onChange={this.infectiousValue.bind(this)}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="infectious">Procent zaszczepionych</label>
                            <input value={defaultValue.V} id="infectious" className="form-control" onChange={this.vaccinatedValue.bind(this)}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="rate1">Współczynnik zaraźliwości</label>
                            <input value={defaultValue.r} id="rate1" className="form-control" onChange={this.infectiousRateValue.bind(this)}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="rate2">Współczynnik wyleczalnosci</label>
                            <input value={defaultValue.a} id="rate2" className="form-control" onChange={this.curabilityRateValue.bind(this)}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-primary" onClick={this.onButtonClick.bind(this)}>Rozpocznij symulację</button>
                    </div>
                </div>
            </div>
        )
    }
}
