import {
  UPDATE_PLAN,
  DELETE_PLAN,
  REQUEST_PLAN,
  REQUEST_PLAN_SUCCESS,
  REQUEST_PLAN_FAILURE,
} from './actions';


const initialState = {
  plans: [],
  loading: false,
};

const planList = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PLAN:
      return Object.assign({}, state, { plans: [
        ...state.plans.slice(0, payload.listKey),
        Object.assign(state.plans[payload.listKey], payload.event),
        ...state.plans.slice(payload.listKey + 1)
      ]},
      {
        loading: false
      });
    case DELETE_PLAN:
      return Object.assign({}, state, { plans: [
        ...state.plans.slice(0, payload),
        ...state.plans.slice(payload + 1)
      ]},
    {
      loading: false,
    });
    case REQUEST_PLAN:
      return Object.assign({}, state, {
        loading: true
      });
    case REQUEST_PLAN_SUCCESS:
      return Object.assign({}, state, { plans: [
        ...payload,
        ...state.plans
      ]},
      {
        loading: false,
      });
    case REQUEST_PLAN_FAILURE:
      return Object.assign({}, state, {
        loading: false,
      });
    default:
      return state;
  }
};


export default planList;
