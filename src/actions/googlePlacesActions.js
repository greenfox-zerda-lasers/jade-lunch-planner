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
    return fetch(`/api/google/${keyword}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: null
    }).then(response => {
      console.log(response);
      return response.json();
    }).then(places => {
      dispatch(requestGooglePlacesSucces(places.results));
    }).catch(error => {
      console.error('Request Failed!', error);
      dispatch(requestGooglePlacesFailure());
    });
  };
};
