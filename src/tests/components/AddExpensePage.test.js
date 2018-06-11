import React from 'react';
import { shallow } from 'enzyme';

import { AddExpensePage } from '../../components/AddExpensePage';
import FAKE from '../FIXTURES/dummyExpensesDataArray';

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

test('should render AddExpensePage korektly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit action', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(FAKE[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(FAKE[1]);
});