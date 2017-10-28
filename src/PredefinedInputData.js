import React, {Component} from 'react';

export default class PredefinedInputData extends Component {

    constructor(...args) {
        super(...args);

        this.params = {};
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
                <button type="submit" className="btn btn-primary" >Symuluj</button>
            </div>
        )
    }
}
