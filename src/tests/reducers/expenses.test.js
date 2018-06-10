import expensesReducer from '../../reducers/expenses';
import FAKE from '../FIXTURES/dummyExpensesDataArray';
  
test('should have a DEFAULT empty array state', ()=>{
  const state = expensesReducer(undefined, {type:'@@INIT'});
  expect(state).toEqual([]);
});

test('should add an expense', ()=>{
  const expense = { id:'1',description:'foo',note:'', createdAt:12345, amount:55555 };
  const action = { type:'ADD_EXPENSE', expense };  
  const state = expensesReducer(FAKE, action);
  expect(state).toEqual([...FAKE, expense]);
});

test('should remove expense by ID', ()=>{
  const action = { type:'REMOVE_EXPENSE', id:FAKE[1].id };
  const state = expensesReducer(FAKE, action);
  expect(state).toEqual([ FAKE[0], FAKE[2] ] );
});

test('should NOT remove expense if BAD ID', ()=>{
  const action = { type:'REMOVE_EXPENSE', id:'bad' };
  const state = expensesReducer(FAKE, action);
  expect(state).toEqual(FAKE);
});

test('should edit an expense', () => {
  const amount = 54321;
  const action = {
    type: 'EDIT_EXPENSE', 
    id: FAKE[1].id,
    updatesObj: { amount }
  };
  const state = expensesReducer(FAKE, action);
  expect(state[1].amount).toBe(54321);
});

test('should NOT edit an expense w/BAD ID', () => {
  const action = {
    type: 'EDIT_EXPENSE', 
    id: 'badID',
    updatesObj: { amount:555 }
  };
  const state = expensesReducer(FAKE, action);
  expect(state).toEqual(FAKE);
});
