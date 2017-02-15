import { combineReducers } from 'redux';
import planList from './plan';
import googlePlaces from './googlePlaces';


export default combineReducers({
  planList,
  googlePlaces,
});
