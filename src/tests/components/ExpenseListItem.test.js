import React from 'react';
import { shallow } from 'enzyme';
import FAKE from '../FIXTURES/dummyExpensesDataArray';
import ExpenseListItem from '../../components/ExpenseListItem';

test('should render ExpenseListItem with expense', () => {
  const wrapper = shallow( <ExpenseListItem { ...FAKE[0] } /> );
  expect(wrapper).toMatchSnapshot();
});