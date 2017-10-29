import React, {Component} from 'react';
import {LineChart, Legend, Line, XAxis, YAxis} from 'recharts';

export default class LinearGraph extends Component {

    constructor(...args) {
        super(...args);

        this.style = {
            //border: "1px solid green",
            display: "block",
            margin: "0px auto",
        }
    }

    render() {
        return (
            <div className="lineargraph" style={this.style}>
                <LineChart
                    width={500}
                    height={450}
                    data={this.props.graphData}
                >
                    <Legend/>
                    <Line type="monotone" dataKey="Sp" name="podatni" stroke="#00FF00"/>
                    <Line type="monotone" dataKey="Ip" name="zakażeni" stroke="#FF0000"/>
                    <Line type="monotone" dataKey="Rp" name="odporni" stroke="#0000FF"/>
                    <Line type="monotone" dataKey="Vp" name="w trakcie nabywania odporoności" stroke="#222222"/>
                    <XAxis dataKey="t"/>
                    <YAxis/>
                </LineChart>
            </div>
        )
    }
}
