import React, {Component} from 'react';

export default class InputParams extends Component {

    constructor(...args) {
        super(...args);

        this.params = {};
    }

    onButtonClick() {
        this.props.onStartButtonClicked();
    }

    onUpdate(field, event) {
        this.params[field] = event.target.value;
        this.props.onParamsUpdate(this.params);
    }

    render() {
        const defaultValue = this.props.inputParams || {};
        /*
        // pierwsze cztery do 100
        this.infectious = 0.05; //infectious / 100;
        this.resistant = 0.05; //resistant / 100;
        this.vaccinated = 0.05; //vaccinated;
        this.susceptible = 0.85; //(100 - infectious - resistant) / 100;

        // do 100
        this.daysCount = 20;

        // do 1
        this.a = 0.0;   // jaka cześć ludzi jest z każdym krokiem przenoszona do procesu szczepienia
        this.y1 = 0.5;  // jaka część ludzi zaszczepionych w każdym kroku przenoszona jest do odpornych (bez różnicy czy naturalnie czy nie)
        this.b1 = 0.2;  // jaka częsć ludzi zaszczepionych w kaðym kroku wciąż będzie zarażana ( powinno być w oczywsity sposób o rząd wielkości mniejsze od b)
        this.u = 0.0    ;   // śmiertelność / dzietność w każdym kroku
        this.b = 0.9;   // jaka część podatnych ludzi zostanie zarażona w każdym kroku
        this.y = 0.15;   // jaka część ludzi chorych w każdym kroku przenoszona jest do ludzi zdrowych i odpornych
        */
        return (
            <div className="col-md-12 set-border">
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="resistant">Procent odpornych</label>
                            <span className="range-label">{defaultValue.R}</span>
                            <input type="range" value={defaultValue.R} id="resistant" className="form-control" onChange={this.onUpdate.bind(this, 'R')}/>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="rate2">Współczynnik wyleczalnosci</label>
                            <span className="range-label">{defaultValue.a}</span>
                            <input type="range" min="0" max="1" step="0.1" value={defaultValue.a} id="rate2" className="form-control" onChange={this.onUpdate.bind('a',this)}/>
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
