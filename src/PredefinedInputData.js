import React, {Component} from 'react';

export default class PredefinedInputData extends Component {

    constructor(...args) {
        super(...args);

        this.params = {};

        this.data = [
            {
                left: {
                    description: '',
                    data: {"infectious":5,"resistant":5,"vaccinated":0,"susceptible":90,"daysCount":"474","a":"0","y1":0.1,"b1":0.005,"u":"0.01","b":0.09,"y":0.015},
                },
                right: {
                    description: '',
                    data: {"infectious":5,"resistant":5,"vaccinated":0,"susceptible":90,"daysCount":"491","a":"0.05","y1":0.1,"b1":0.005,"u":0.01,"b":0.09,"y":0.015},
                },
            },


        ]
    }

    render() {
        return (
            <div className="col-md-12 add-bottom-line text-center">
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" onClick={this.props.onParamsChange.bind(this, this.data[0].left.data, this.data[0].right.data)} className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" />
                        Opis danych
                    </label>
                </div>
            </div>
        )
    }
}
