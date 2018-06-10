import React from 'react';
import Header from '../../components/Header';
import {shallow} from 'enzyme';

// import ReactShallowRenderer from 'react-test-renderer/shallow';
// test('should render Header component aok', () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

// Enzyme Examples: 
  // expect( wrapper.find('h1').length ).toBe(1);
  // expect( wrapper.find('h1').text() ).toBe('Expensifical');
  
test('should render Header component aok', () => {
  const wrapper =shallow(<Header/>);
  expect(wrapper).toMatchSnapshot();
});