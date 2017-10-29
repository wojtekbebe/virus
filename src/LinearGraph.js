import React, {Component} from 'react';
import {AreaChart, LineChart, Area, Legend, Line, XAxis, YAxis} from 'recharts';

export default class LinearGraph extends Component {

    constructor(...args) {
        super(...args);

        this.style = {
            display: "block",
            margin: "0px auto",
        }
    }

    percentFormatter(d) {
        return `${(d*100)}%`;
    }

    render() {
        return (
            <div className="lineargraph" style={this.style}>
                <AreaChart
                    width={500}
                    height={450}
                    data={this.props.graphData}
                    stackOffset="expand"
                >
                    <Legend wrapperStyle={{ bottom: -20, left: 20}} layout="horizontal" verticalAlign="bottom" align="middle"/>
                    <Area type="monotone" dataKey="Vp" stackId="1" name="w trakcie nabywania odporoności" dot={false} stroke="#222222" fill="#222222"/>
                    <Area type="monotone" dataKey="Ip" stackId="1" name="zakażeni" stroke="#FF0000" fill="#ff0000" dot={false}/>
                    <Area type="monotone" dataKey="Rp" stackId="1" name="odporni" stroke="#82ca9d" fill="#82ca9d" dot={false}/>
                    <Area type="monotone" dataKey="Sp" stackId="1" name="podatni" stroke="#ffbc58" fill="#ffbc58" dot={false}/>

                    <XAxis label={{ value:"liczba dni", position: "insideBottomRight", dy:10}} dataKey="t"/>

                    <YAxis tickFormatter={this.percentFormatter} label={{ value:"% populacji", position: "insideTopLeft", dy:-10, dx:60}}/>
                </AreaChart>
            </div>
        )
    }
}
