import React, { Component } from 'react';


class PlanItem extends Component {
  render() {
    return (
      <li className="plan-box">
        <h1><span>PLACE:</span> {this.props.place}</h1>
        <h2><span>TIME:</span> {this.props.time}</h2>
      </li>
    );
  }
}


PlanItem.propTypes = {
  place: React.PropTypes.string,
  time: React.PropTypes.any,
};


export default PlanItem;
