//test App.jsx
import React from 'react';
import { shallow } from 'enzyme';
import PlanList from '../src/components/planlist';
import SearchPlace from '../src/components/searchPlace';
import { App } from '../src/app/App';
// import { Provider } from 'react-redux';

// test('App first test', () =>{
//   const app = shallow(<App />);
//
//   expect(app.title()).toEqual('LUNCH');
// });

describe('Test for the App component', () => {
  it("should render without throwing an error",  () => {
    expect(shallow(<App />).contains(<div className="container container-fluid row col-md-12"><SearchPlace /><PlanList /></div>)).toBe(true);
  });
});
