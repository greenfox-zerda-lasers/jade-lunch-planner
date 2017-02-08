import React from 'react';
import { render } from 'react-dom';
import Root from './Root';


// entry point now rendering Root Component instead of 'App' (we changed it)

render(
  <Root title="LUNCH"/>,
  document.querySelector('#root')
);
