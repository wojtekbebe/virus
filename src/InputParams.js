import React, { Component } from 'react';

export default class InputParams extends Component {

  onUpdate() {
    this.props.onParamsUpdate({
        initialPopulation: 5,
        //... rest of parameters which we need to settle on
    })
  }

  onChange() {
    this.onUpdate();
  }

  render() {
    return (
      <div className="inputparams">
        <input onchange={this.onChange.bind(this)} />
      </div>
    )
  }
}
