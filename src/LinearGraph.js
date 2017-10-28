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
                    width={600}
                    height={250}
                    data={this.props.graphData}
                >
                    <Legend/>
                    <Line type="monotone" dataKey="S" name="podatni" stroke="#00FF00"/>
                    <Line type="monotone" dataKey="I" name="zakażeni" stroke="#FF0000"/>
                    <Line type="monotone" dataKey="R" name="odporni" stroke="#0000FF"/>
                    <Line type="monotone" dataKey="V" stroke="#222222"/>
                    <XAxis dataKey="t"/>
                    <YAxis/>
                </LineChart>
            </div>
        )
    }
}
