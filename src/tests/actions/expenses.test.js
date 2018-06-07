import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should emit a remove expense action obj',()=>{
  const testVal = removeExpense({ id: '123abc' });
  expect(testVal).toEqual({
    type:'REMOVE_EXPENSE',
    id:'123abc'
  });
});

test('should emit an edit expense action obj', ()=>{
  const testVal = editExpense('123abc', {amount:123, note:'xyz'});
  expect(testVal).toEqual({
    type: 'EDIT_EXPENSE',
    id:'123abc',
    updatesObj:{amount:123, note:'xyz'}
  });
});

test('should emit add expense action obj with specified vals', ()=>{
  const dummyData = {
    description:'foo',
    amount:987654321,
    createdAt:1000,
    note:'bar - it is where I go to drink'
  };
  const testVal = addExpense(dummyData);

  expect(testVal).toEqual({
    type: 'ADD_EXPENSE',
    expense:{ 
      ...dummyData, 
      id: expect.any(String) 
    }
  });
});

test('should emit add expense action obj with default state vals', ()=>{
  const testVal = addExpense();
  expect(testVal).toEqual({
    type: 'ADD_EXPENSE',
    expense:{
      description:'',
      note:'',
      amount:0,
      createdAt:0,
      id: expect.any(String) 
    }
  });
});