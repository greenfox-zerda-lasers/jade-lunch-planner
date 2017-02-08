import UPDATE_PLAN from './actions';


const initialState = {
  place: '',
  time: '00:00'
};

const plan = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_PLAN:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};


export default plan;
