import React, { Component } from 'react';

import PlanItem from './planItem';


class PlanList extends Component {
  render() {
    if(this.props.plans.length === 0) {
      return <div>Loading... </div>;
    }

    const plans = this.props.plans.map(plan => {
      return (
        <PlanItem
          key={plan.plan_id}
          place={plan.place}
          time={plan.time}
        />
      );
    });

    return (
      <div className="plan-list col-sm-12 col-md-6">
        <ul>
          {plans}
        </ul>
      </div>
    );
  }
}


PlanList.propTypes = {
  plans: React.PropTypes.array,
};


export default PlanList;
