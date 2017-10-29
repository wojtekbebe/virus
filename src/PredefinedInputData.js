import React, {Component} from 'react';

export default class PredefinedInputData extends Component {

    constructor(...args) {
        super(...args);

        this.params = {};

        this.data = [
            {
                left: {
                    description: '',
                    data: {"infectious":5,"resistant":5,"vaccinated":0,"susceptible":90,"daysCount":"500","a":"0.005","y1":0.1,"b1":0.005,"u":"0.01","b":0.09,"y":0.015},
                },
                right: {
                    description: '',
                    data: {"infectious":5,"resistant":5,"vaccinated":0,"susceptible":90,"daysCount":"500","a":"0.05","y1":0.1,"b1":0.005,"u":0.01,"b":0.09,"y":0.015},
                },
            },


        ]
    }

    render() {
        return (
            <div className="col-md-12 add-bottom-line text-center">
                <div className="form-check">
                    <label className="form-check-label">
                        <button className="btn btn-success" onClick={this.props.onParamsChange.bind(this, this.data[0].left.data, this.data[0].right.data)}>
                            Załaduj przykładowe dane obrazujące rozprzetrzenianie infekcji w populacji szczepionej i nieszczepionej
                        </button>
                    </label>
                </div>
            </div>
        )
    }
}
