import React from 'react';
import { shallow } from 'enzyme';

import { AddExpensePage } from '../../components/AddExpensePage';
import FAKE from '../FIXTURES/dummyExpensesDataArray';

let addExpense, history, wrapper;  

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render AddExpensePage korektly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit action', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(FAKE[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(FAKE[1]);
});