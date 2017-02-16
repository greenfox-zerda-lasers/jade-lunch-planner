import {
  REQUEST_GOOGLE_PLACES,
  REQUEST_GOOGLE_PLACES_SUCCESS,
  REQUEST_GOOGLE_PLACES_FAILURE,
} from './actions';


const initialState = {
  googlePlaces: [],
  loading: false,
};

const googlePlacesList = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REQUEST_GOOGLE_PLACES:
      return Object.assign({}, state, {
        loading: true
      });
    case REQUEST_GOOGLE_PLACES_SUCCESS:
      return Object.assign({}, state, payload,
      {
        loading: false,
      });
    case REQUEST_GOOGLE_PLACES_FAILURE:
      return Object.assign({}, state, {
        loading: false,
      });
    default:
      return state;
  }
};


export default googlePlacesList;
