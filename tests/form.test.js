//test App.jsx
import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/app/App';

test('App changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(
    <App labelOn="On" labelOff="Off" />
  );

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});
