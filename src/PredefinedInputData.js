import React, {Component} from 'react';

export default class PredefinedInputData extends Component {

    constructor(...args) {
        super(...args);

        this.params = {};
    }

    render() {
        return (
            <div className="col-md-12 add-bottom-line">
                <button type="submit" className="btn btn-primary">5% niezaszczepionych</button>
                <button type="submit" className="btn btn-primary">10% niezaszczepionych</button>
                <button type="submit" className="btn btn-primary">20% niezaszczepionych</button>
                <button type="submit" className="btn btn-primary">30% niezaszczepionych</button>
                <button type="submit" className="btn btn-primary">40% niezaszczepionych</button>
                <button type="submit" className="btn btn-primary">50% niezaszczepionych</button>
            </div>
        )
    }
}
