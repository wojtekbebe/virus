import React, {Component} from 'react';

export default class InputParams extends Component {

    constructor(...args) {
        super(...args);

        this.params = {};
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
                            <label htmlFor="resistant">% odpornych</label>
                            <span className="range-label">{defaultValue.resistant}</span>
                            <input type="range" min="0" max="100" step="0.05" value={defaultValue.resistant} id="resistant" className="form-control" onChange={this.onUpdate.bind(this, 'resistant')}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="infectious">% zarażonych</label>
                            <span className="range-label">{defaultValue.infectious}</span>
                            <input type="range" min="0" max="100" step="0.05" value={defaultValue.infectious} id="infectious" className="form-control" onChange={this.onUpdate.bind(this, 'infectious')}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="vaccinated">% w trakcie nabywania odporności</label>
                            <span className="range-label">{defaultValue.vaccinated}</span>
                            <input type="range" min="0" max="100" step="0.05" value={defaultValue.vaccinated} id="vaccinated" className="form-control" onChange={this.onUpdate.bind(this, 'vaccinated')}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="susceptible">% podatnych</label>
                            <span className="range-label">{defaultValue.susceptible}</span>
                            <input type="range" min="0" max="100" step="0.05" value={defaultValue.susceptible} id="susceptible" className="form-control" onChange={this.onUpdate.bind(this, 'susceptible')}/>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="daysCount">Czas trwania symulacji</label>
                            <span className="range-label">{defaultValue.daysCount}</span>
                            <input type="range" min="0" max="1000" step="1" value={defaultValue.daysCount} id="daysCount" className="form-control" onChange={this.onUpdate.bind(this, 'daysCount')}/>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="a">Wskaźnik szczepień</label>
                            <span className="range-label">{defaultValue.a}</span>
                            <input type="range" min="0" max="0.1" step="0.01" value={defaultValue.a} id="a" className="form-control" onChange={this.onUpdate.bind(this, 'a')}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="y1">Wskaźnik nabierania odporności przez szczepionych</label>
                            <span className="range-label">{defaultValue.y1}</span>
                            <input type="range" min="0" max="0.1" step="0.01" value={defaultValue.y1} id="y1" className="form-control" onChange={this.onUpdate.bind(this, 'y1')}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="b1"><br/>Wskaźnik zachorowań w trakcie nabierania odpornosci</label>
                            <span className="range-label">{defaultValue.b1}</span>
                            <input type="range" min="0" max="0.1" step="0.01" value={defaultValue.b1} id="b1" className="form-control" onChange={this.onUpdate.bind(this, 'b1')}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="u"><br/>Wskaźnik śmiertelności/dzietności</label>
                            <span className="range-label">{defaultValue.u}</span>
                            <input type="range" min="0" max="0.1" step="0.01" value={defaultValue.u} id="u" className="form-control" onChange={this.onUpdate.bind(this, 'u')}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="b"><br/>Wskaźnik zaraźliwości</label>
                            <span className="range-label">{defaultValue.b}</span>
                            <input type="range" min="0" max="0.1" step="0.01" value={defaultValue.b} id="b" className="form-control" onChange={this.onUpdate.bind(this, 'b')}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="y">Wskaźnik ozdrowień/uodpornień</label>
                            <span className="range-label">{defaultValue.y}</span>
                            <input type="range" min="0" max="0.1" step="0.01" value={defaultValue.y} id="y" className="form-control" onChange={this.onUpdate.bind(this, 'y')}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
