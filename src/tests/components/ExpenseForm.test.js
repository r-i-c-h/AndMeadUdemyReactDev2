import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import FAKE from '../FIXTURES/dummyExpensesDataArray';

test('should render ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with Data aok', () => {
  const wrapper = shallow(<ExpenseForm expense={FAKE[0]} />);
  expect(wrapper).toMatchSnapshot();
});
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
test('should render error for invalid submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();

  wrapper.find('form').simulate('submit', {
    preventDefault:()=>{}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'Lorem Ipsum';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find( 'input' ).at(0).simulate( 'change', {target:{ value }}); // <~~ at() is akin to query_[0] or nth-child 
  expect(wrapper.state('description')).toBe(value);
}); 

test('should set note on textbox change', () => {
  const value = 'Lorem Ipsum';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find( 'textarea' ).simulate( 'change', {target:{ value }}); // 
  expect(wrapper.state('note')).toBe(value);
}); 

test('should setState on valid input', () => {
  const value = '123.45';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find( 'input' ).at(1).simulate( 'change', {target:{ value }});
  expect(wrapper.state('amount')).toBe(value);
});

test('should NOT setState on invalid input', () => {
    const value = '0123.321';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find( 'input' ).at(1).simulate( 'change', {target:{ value }});
    expect(wrapper.state('amount')).toBe('');
});

