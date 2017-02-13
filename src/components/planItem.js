import React, { Component } from 'react';


class PlanItem extends Component {
  render() {
    return (
      <li>
        <h1>{this.props.place}</h1>
        <h2>{this.props.time}</h2>
      </li>
    );
  }
}


PlanItem.propTypes = {
  place: React.PropTypes.string,
  time: React.PropTypes.any,
};


export default PlanItem;
