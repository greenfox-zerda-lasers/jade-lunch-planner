//test App.jsx
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PlanListComponent from '../src/components/planlist';
import SearchPlace from '../src/components/searchPlace';
import googlePlacesList from '../src/components/googlePlacesList';
import { app } from '../src/app/App';
import { Provider } from 'react-redux';


describe('Test for the App component', () => {
  it("should render without throwing an error",  () => {
    // console.log(shallow(<app />));
    expect(shallow(<app />).find('li').length).toBe(0);
  });

  // it("should have 2 divs", () => {
  //   expect(shallow(<app />)).toBe(true);
  // });
});

describe('Test PlanList', () => {
  it("checks the child elements", function () {
    expect(shallow(<PlanListComponent plans={[]} />).children.length).toBe(1);
  });

  it("is a div", () => {
   expect(shallow(<PlanListComponent plans={[]} />).is('div')).toBe(true);
  });
});

// describe('Test googlePlaces', () => {
//   it("checks the existence of places", () => {
//     const wrapper = shallow(<googlePlacesList />);
//     expect(wrapper.find('.found-places').find('.found-place-items')).toBe(true);
//   });
//
//   it("renders itself", () => {
//     const wrapper = shallow(<googlePlacesList />);
//     expect(wrapper.find('.found-place-item').length).toBe(0);
//     expect(wrapper.find('.found-places')).to.have.length(1);
//     // expect(wrapper.find(Foo).render().find('.in-foo')).to.have.length(1);
//   });
//
// });
