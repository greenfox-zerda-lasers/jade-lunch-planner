export const updatePlan = payload => ({
  type: 'UPDATE_PLAN',
  payload
});

export const requestPlan = () => ({
  type: 'REQUEST_PLAN'
});

export const requestPlanSuccess = payload => ({
  type: 'REQUEST_PLAN_SUCCESS',
  payload
});

export const requestPlanFailure = () => ({
  type: 'REQUEST_PLAN_FAILURE',
});


// async ajax requests

export const fetchPlan = () => {
  return dispatch => {
    dispatch(requestPlan());
    return fetch(`/api/plans`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: null
    }).then(response => {
      return response.json();
    }).then(plans => {
      dispatch(requestPlanSuccess(plans));
    }).catch(error => {
      console.error('Request Failed!', error);
      dispatch(requestPlanFailure());
    });
  };
};


export const fetchNewPlan = plan => {
  return dispatch => {
    dispatch(requestPlan());
    return fetch('/api/plans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        place: plan.place,
        time: plan.time,
        timezone_offset: plan.timezone_offset,
      })
    }).then(response => {
      return response.json();
    }).then(plan => {
      dispatch(requestPlanSuccess([ plan ]));
    }).catch(error => {
      console.error('Request Failed!', error);
      dispatch(requestPlanFailure());
    });
  };
};


export const fetchUpdatePlan = plan => {
  return dispatch => {
    dispatch(requestPlan());
    return fetch(`/api/plans/${plan.plan_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        place: plan.place,
        time: plan.time,
        timezone_offset: plan.timezone_offset,
      })
    }).then(response => {
      return response.json();
    }).then(plan => {
      dispatch(requestPlanSuccess(plan));
    }).catch(error => {
      console.error('Request Failed!', error);
      dispatch(requestPlanFailure());
    });
  };
};
