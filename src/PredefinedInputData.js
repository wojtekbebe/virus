import React, {Component} from 'react';

export default class PredefinedInputData extends Component {

    constructor(...args) {
        super(...args);

        this.params = {};
    }

    render() {
        return (
            <div className="col-md-12 add-bottom-line">
                
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
                        OSPA: zaszczepieni 20%, niezaszczepieni 80%
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
                        OSPA: zaszczepieni 70%, niezaszczepieni 30%
                    </label>
                </div>
            </div>
        )
    }
}
