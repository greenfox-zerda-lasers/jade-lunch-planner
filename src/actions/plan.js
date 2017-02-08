export const updatePlan = payload => ({
  type: 'UPDATE_PLAN',
  payload
});

export const requestPlan = payload => ({
  type: 'REQUEST_PLAN',
  payload
});

export const loading = () => {
  type: 'FETCH_PLANS_LOADING',
  payload
}

export const fetchPlan = () => {
  payload
}




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
