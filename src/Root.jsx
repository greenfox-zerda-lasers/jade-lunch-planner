import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './app/App';


// Root Component provides acces to store so all of its children can use it
// configureStore collects all Reducers what we use (default entry point is index.js)
// Root is rendered from index.jsx from the same root directory and if it has some props then App gets all of them because of '...' (spread operator)

const Root = (props) => (
  <Provider store={configureStore()}>
    <App {...props} />
  </Provider>
);


export default Root;
