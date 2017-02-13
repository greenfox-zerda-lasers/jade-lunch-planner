import { toUTS } from '../app/time_validator';


export const updatePlan = payload => ({
  type: 'UPDATE_PLAN',
  payload
});

export const requestPlan = () => ({
  type: 'REQUEST_PLAN'
});

export const requestPlanSuccess = payload => ({
  type: 'REQUEST_PLAN_SUCCESS',
  payload: {
    plans: payload
  }
});

export const requestPlanFailure = () => ({
  type: 'REQUEST_PLAN_FAILURE',
});


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
    }).then(plan => {
      dispatch(requestPlanSuccess(plan));
    }).catch(error => {
      dispatch(requestPlanFailure());
    });
  };
};


export const fetchUpdatePlan = (plan_id, plan, timezoneOffset) => {
  return dispatch => {
    dispatch(requestPlan());
    return fetch(`/api/plans/${plan_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        place: plan.place,
        time: toUTS(plan.time, timezoneOffset),
      })
    }).catch((error) => {
      console.error('Request Failed', error);
      dispatch(requestPlanFailure());
    });
  };
};
