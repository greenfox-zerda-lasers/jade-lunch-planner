// import TestUtils, { renderIntoDocument } from 'react-addons-test-utils';
// import React from 'react';
// import { findDOMNode } from 'react-dom';
//
// import App from '../src/app/App.jsx';
//
//
// const renderer = TestUtils.createRenderer();
//
// const shallow = (Component, props) => {
//   renderer.render(<Component {...props} />);
//   return renderer.getRenderOutput();
// };
//
// describe('low level testing of `App` component', () => {
//   it('should shallow render', () => {
//     const app = shallow(App, {title: 'Lunch'});
//     expect(app.type).toBe('article');
//     expect(app.props.className).toBe('input-wrapper');
//     expect(app.props.children).toBe('Lunch');
//   });
// });
//
//
// const mount = (Component, props) => {
//   return renderIntoDocument(<Component { ...props } />);
// };
//
// describe('simple test of `App` component', () => {
//   it ('mount should render a simple component', () => {
//     let component = mount(App, { title: 'Lunch' });
//     let node = findDOMNode(component);
//     expect(node.textContent).toEqual('Lunch')
//   });
// });

// npm test -- --watch








//
//
//
// jasmine.describe('A coral is just a function', () => {
//   let a;
//
//   jasmine.it('and so is a spec', () => {
//     a = true;
//     jasmine.expect(a).toBe(true);
//   });
// });
