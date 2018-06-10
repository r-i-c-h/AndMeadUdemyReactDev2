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