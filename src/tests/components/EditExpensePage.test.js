import React from 'react';
import { shallow } from 'enzyme';
import FAKE from '../FIXTURES/dummyExpensesDataArray';
import { EditExpensePage } from '../../components/EditExpensePage';


let editExpense, removeExpense, history, wrapper;  

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(  
    <EditExpensePage 
      editExpense={editExpense} 
      removeExpense={removeExpense}
      history={history}
      expense={FAKE[2]} 
    />);
});

test('should render EditExpensePage korektly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense onSubmit action', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(FAKE[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith( FAKE[2].id, FAKE[2]);
});


test('should handle remove button action', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({id:FAKE[2].id});
});