import { GOOGLE_PLACES_API_KEY } from '../services/apis';


export const requestGooglePlaces = () => ({
  type: 'REQUEST_GOOGLE_PLACES'
});

export const requestGooglePlacesSucces = payload => ({
  type: 'REQUEST_GOOGLE_PLACES_SUCCESS',
  payload: {
    googlePlaces: payload
  }
});

export const requestGooglePlacesFailure = () => ({
  type: 'REQUEST_GOOGLE_PLACES_FAILURE'
});


export const fetchGooglePlaces = keyword => {
  return dispatch => {
    dispatch(requestGooglePlaces());
    return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=47.507462,19.0640058&radius=800&type=restaurant&keyword=${keyword}&key=${GOOGLE_PLACES_API_KEY}`)
      .then(response => {
      return response.json();
    }).then(places => {
      dispatch(requestGooglePlacesSucces(places.results));
    }).catch(error => {
      console.error('Request Failed!', error);
      dispatch(requestGooglePlacesFailure());
    });
  };
};
