export const updatePlan = payload => ({
  type: 'UPDATE_PLAN',
  payload
});

export const requestPlan = payload => ({
  type: 'REQUEST_PLAN',
  payload
});

export const isFetching = () => ({
  type: 'FETCH_PLANS_LOADING'
});

export const responseError = payload => ({
  type: 'FETCH_PLANS_ERROR',
  payload
});

export const fetchPlan = (plan_id, method='GET', body=null) => {
  return (dispatch) => {
    dispatch(isFetching());
    return fetch(`/api/plans/${plan_id}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }).then(response => {
      return response.json();
    }).then(plan => {
      dispatch(updatePlan(plan));
    }).catch(error => {
      console.log(error);
      dispatch(responseError(error));
    });
  };
};




// const fetchPlan = payload => {
//   const plan_id = 1;
//   return;
//   fetch(`/api/plans/${plan_id}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: null,
//   })
//   .then((response) => {
//     return response.json();
//   });
//   .then((plan) => {
//     this.setState({
//       place: plan.place.trim(),
//       time: validator.toLocalTime(plan.time),
//     });
//   });
//   .catch((error) => {
//     console.log('Request Failed', error);
//   });
// };
