import React, {Component} from 'react';
import {LineChart, Line, XAxis, YAxis} from 'recharts';

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
                    width={600}
                    height={250}
                    data={this.props.graphData}
                >
                    <Line type="monotone" dataKey="S" stroke="#00FF00"/>
                    <Line type="monotone" dataKey="I" stroke="#FF0000"/>
                    <Line type="monotone" dataKey="R" stroke="#0000FF"/>
                    <XAxis dataKey="t"/>
                    <YAxis/>
                </LineChart>
            </div>
        )
    }
}
