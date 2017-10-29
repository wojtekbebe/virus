import React from 'react';
import ReactDOM from 'react-dom';
import Simulation from './Simulation';
import PredefinedInputData from './PredefinedInputData'
import './index.css';

ReactDOM.render(
    <div className="container container-main">
        <div className="row header text-center">
            <h2>Symulator "Virus"</h2>
            <p>Zobacz jak rozprzestrzenia się epidemia choroby w zależności od liczby zaszczepionych osobników w populacji.</p>
        </div>
        <div className="row">
            <PredefinedInputData/>
        </div>
        <div className="row">
            <Simulation/>
            <Simulation/>
        </div>
    </div>
    ,
    document.getElementById('root')
);
