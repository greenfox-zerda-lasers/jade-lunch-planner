//test App.jsx
import React from 'react';
import { shallow, mount } from 'enzyme';
import PlanList from '../src/components/planlist';
import SearchPlace from '../src/components/searchPlace';
import { app } from '../src/app/App';
import { Provider } from 'react-redux';

// test('App first test', () =>{
//   const app = shallow(<App />);
//
//   expect(app.title())
// .toEqual('LUNCH');
// });

describe('Test for the App component', () => {
  it("should render without throwing an error",  () => {
    // console.log(shallow(<app />));
    expect(shallow(<app />).find('div').length).toBe(0);
  });

  it("should have 2 divs", () => {
    const wrapper = mount(<app />);
    expect(wrapper.children().length).toBe(2);
  });
});
