import React, {Component} from 'react';
import {LineChart, Legend, Line, XAxis, YAxis} from 'recharts';

export default class LinearGraph extends Component {

    constructor(...args) {
        super(...args);

        this.style = {
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
                    <Legend verticalAlign="bottom"/>
                    <Line type="monotone" dataKey="Sp" name="podatni" stroke="#FFA500" dot={false}/>
                    <Line type="monotone" dataKey="Ip" name="zakażeni" stroke="#FF0000" dot={false}/>
                    <Line type="monotone" dataKey="Rp" name="odporni" stroke="#00FF00" dot={false}/>
                    <Line type="monotone" dataKey="Vp" name="w trakcie nabywania odporoności" dot={false} stroke="#222222"/>
                    <XAxis label={{ value:"liczba dni", position: "insideBottomRight", dy:10}} dataKey="t"/>
                    <YAxis label={{ value:"% populacji", position: "insideTopLeft", dy:-10, dx:60}}/>
                </LineChart>
            </div>
        )
    }
}
