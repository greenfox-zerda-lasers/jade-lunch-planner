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


export const fetchPlan = plan_id => {
  return dispatch => {
    dispatch(requestPlan());
    return fetch(`/api/plans/${plan_id}`, {
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


// export const fetchUpdatePlan = plan_id => {
//   return dispatch => {
//     dispatch(requestPlan());
//     return fetch()
//   }
// };
// const plan_id = 1;
// return fetch(`/api/plans/${plan_id}`, {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     place: this.state.place,
//     time: validator.toUTS(this.state.time),
//   })
// }).catch((error) => {
//   console.error('Request Failed', error);
// });
