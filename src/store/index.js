import { createStore } from 'redux';
import rootReducer from '../reducers';


// imported rootReducer collects all of our reducer from a single file from '../reducers/index.js'
// (line 11) => extend our REDUX extension in our browser

export default() => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
