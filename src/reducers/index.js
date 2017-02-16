import { combineReducers } from 'redux';
import planList from './plan';
import googlePlacesList from './googlePlaces';


export default combineReducers({
  planList,
  googlePlacesList,
});
