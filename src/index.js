import React from 'react';
import ReactDOM from 'react-dom';
import Simulation from './Simulation';
import PredefinedInputData from './PredefinedInputData'
import './index.css';

ReactDOM.render(
    <div className="container container-main">
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
