import React from 'react';

import PlanItem from './planItem';
import { toLocalTime } from '../app/timeValidator';


const PlanList = props => {
  if(props.plans.length === 0) {
    return <div>Loading... </div>;
  }

  const plans = props.plans.map(plan => {
    const time = toLocalTime(plan.time, plan.timezone_offset);

    return (
      <PlanItem
        key={plan.plan_id}
        place={plan.place}
        time={time}
        planId={plan.plan_id}
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
};


PlanList.propTypes = {
  plans: React.PropTypes.array,
};


export default PlanList;
