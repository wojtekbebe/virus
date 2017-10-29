import React, {Component} from 'react';
import './App.css';
import SVIRLinearEngine from "./models/SVIREngine";
import Heatmap from 'react-heatmap';
import LinearGraph from "./LinearGraph";
import InputParams from './InputParams';
import RandomHeatEngine from "./models/RandomHeatEngine";

class Simulation extends Component {
    onParamsUpdate(inputParams) {
        this.setState(Object.assign(
            {},
            this.state,
            {
                inputParams: Object.assign({}, this.state.inputParams, inputParams),
            })
        );

        setTimeout(() => this.runSimulation(), 50); // TODO: change to .throttle
    }

    componentDidMount() {
        this.runSimulation();
    }

    runSimulation() {
        const linearEngine = new SVIRLinearEngine(this.state.inputParams);

        const heatEngine = new RandomHeatEngine(this.state.inputParams);

        this.setState(Object.assign(
                {},
                this.state,
                {
                    graphData: linearEngine.getGraphData(),
                    heatData: heatEngine.getHeatData(this.state.time),
                }
            )
        );
    }

    onTimeChange(event) {
        this.setState(Object.assign({}, this.state, {
            time: event.target.value,
        }));

        setTimeout(() => this.runSimulation(), 50); // TODO: change to .throttle
    }

    constructor(...args) {
        super(...args);

        this.state = {
            time: 0,
            graphData: [],

            inputParams: {
                infectious: 0.05, //infectious / 100,
                resistant: 0.05, //resistant / 100,
                vaccinated: 0.05, //vaccinated,
                susceptible: 0.85, //(100 - infectious - resistant) / 100,

                daysCount: 20,

                a: 0.1,   // jaka cześć ludzi jest z każdym krokiem przenoszona do procesu szczepienia
                y1: 0.5,  // jaka część ludzi zaszczepionych w każdym kroku przenoszona jest do odpornych (bez różnicy czy naturalnie czy nie)
                b1: 0.2,  // jaka częsć ludzi zaszczepionych w kaðym kroku wciąż będzie zarażana ( powinno być w oczywsity sposób o rząd wielkości mniejsze od b)
                u: 0.0    ,   // śmiertelność / dzietność w każdym kroku
                b: 0.9,   // jaka część podatnych ludzi zostanie zarażona w każdym kroku
                y: 0.15,   // jaka część ludzi chorych w każdym kroku przenoszona jest do ludzi zdrowych i odpornych
            },
            heatData: [],
        };

        this.heatContainerStyle = {
            width: "500px",
            height: "500px",
        }

    }

    render() {
        return (
            <div className="col-md-6">
                <InputParams inputParams={this.state.inputParams}
                             onParamsUpdate={this.onParamsUpdate.bind(this)}/>
                <div className="col-md-12 left-box-lightblue">
                    <LinearGraph graphData={this.state.graphData}/>
                </div>
                <div className="col-md-12 left-box-heatmap">
                    <Heatmap height={450} width={450} max={1} unit="pixels" data={this.state.heatData}/>
                </div>
                <div className="col-md-12 time-range">
                    <div className="form-group">
                        <span className="range-label">Czas</span>
                        <input type="range" min="1" max="100" step="1" value={this.state.time} id="time" onChange={this.onTimeChange.bind(this)} className="form-control"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Simulation;
