//test App.jsx
import React from 'react';
import { shallow, mount } from 'enzyme';
import PlanListComponent from '../src/components/planlist';
import SearchPlace from '../src/components/searchPlace';
import { app } from '../src/app/App';
import { Provider } from 'react-redux';


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

describe('Test PlanList', () => {
  it("description", function () {
    expect(shallow(<PlanListComponent />).children.length).toBe(1);
  });
});
