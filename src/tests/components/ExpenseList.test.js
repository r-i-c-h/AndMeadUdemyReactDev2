import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import FAKE from '../FIXTURES/dummyExpensesDataArray';

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={FAKE}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList w/Msg if no Expenses', () => {
  const wrapper = shallow( <ExpenseList expenses={ [] } /> );
  expect(wrapper).toMatchSnapshot();
});

