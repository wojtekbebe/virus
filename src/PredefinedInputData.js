import React, {Component} from 'react';

export default class PredefinedInputData extends Component {

    constructor(...args) {
        super(...args);

        this.params = {};
        /**
         {"infectious":5,"resistant":5,"vaccinated":0,"susceptible":90,"daysCount":"474","a":"0","y1":0.1,"b1":0.005,"u":"0.01","b":0.09,"y":0.015}
         {"infectious":5,"resistant":5,"vaccinated":0,"susceptible":90,"daysCount":"491","a":"0.05","y1":0.1,"b1":0.005,"u":0.01,"b":0.09,"y":0.015}
         */
    }

    render() {
        return (
            <div className="col-md-12 add-bottom-line text-center">
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1"/>
                        OSPA: zaszczepieni 20%, niezaszczepieni 80%
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"/>
                        OSPA: zaszczepieni 70%, niezaszczepieni 30%
                    </label>
                </div>
            </div>
        )
    }
}
