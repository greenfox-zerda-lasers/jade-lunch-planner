import {
  UPDATE_PLAN,
  FETCH_PLANS_ERROR,
  FETCH_PLANS_LOADING,
} from './actions';


const initialState = {
  place: '',
  time: '00:00',
  loading: false,
};

const plan = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PLAN:
      return Object.assign({}, state,
        Object.assign({}, payload, {
          loading: false,
        })
      );
    case FETCH_PLANS_LOADING:
      return Object.assign({}, state, {
        loading: true,
      });
    case FETCH_PLANS_ERROR:
      return console.log('error');
    default:
      return state;
  }
};


export default plan;
