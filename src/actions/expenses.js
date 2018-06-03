import uuid from 'uuid';

export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  // need {} = {} to cover possibility of looking for missing properties on undefined
  // addExpense() returns an obj
  //  that obj will become the 'action' object / value of the dispatch 'action' var
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const editExpense = (id, updatesObj) => ({
  type: 'EDIT_EXPENSE',
  id,
  updatesObj
});
