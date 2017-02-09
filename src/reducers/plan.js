import {
  UPDATE_PLAN,
  REQUEST_PLAN,
  REQUEST_PLAN_SUCCESS,
  REQUEST_PLAN_FAILURE,
} from './actions';

const validator = require('../app/time_validator');


const initialState = {
  place: '',
  time: '00:00',
  loading: false,
};

const plan = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PLAN:
      return Object.assign({}, state, payload);
    case REQUEST_PLAN:
      return Object.assign({}, state, {
        loading: true
      });
    case REQUEST_PLAN_SUCCESS:
      return Object.assign({}, state, {
        time: validator.toLocalTime(payload.time),
        place: payload.place.trim(),
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


export default plan;
