//test App.jsx
import React from 'react';
import { shallow, mount, render  } from 'enzyme';
import PlanList from '../src/components/planlist';
import App from '../src/app/App';

describe('Test for the App component', () => {
  it("should render without throwing an error",  () => {
    expect(shallow(<App />).contains(<div className="container container-fluid row col-md-12"><PlanList /></div>)).toBe(true);
  });
});
