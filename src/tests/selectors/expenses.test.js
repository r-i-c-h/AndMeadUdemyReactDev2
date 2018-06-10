import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import dummyData from '../FIXTURES/dummyExpensesDataArray';

test('should filter by text value',()=>{
  const filterObj = {
    text: 'olio',
    sortBy: 'date',
    startDate: undefined, 
    endDate: undefined
  };
  const result = selectExpenses( dummyData, filterObj );

  expect(result).toEqual([dummyData[2]]);
});

test('should filter by startDate val',()=>{
  const filterObj = {
    text: '',
    sortBy: 'date',
    startDate: moment(0), 
    endDate: undefined
  };
  const result = selectExpenses( dummyData, filterObj );
  expect(result).toEqual([ dummyData[2], dummyData[0] ]);
});

test('should filter by endDate val', () => {
  const filterObj = {
    text: '',
    sortBy: 'date',
    startDate: undefined, 
    endDate: moment(0)
  };
  const result = selectExpenses( dummyData, filterObj );
  expect(result).toEqual([ dummyData[0], dummyData[1] ]);
});

test('should sort by Date', () => {
  const filterObj = {
    text: '',
    sortBy: 'date',
    startDate: undefined, 
    endDate: undefined
  };
  const result = selectExpenses( dummyData, filterObj );
  expect(result).toEqual([ dummyData[2], dummyData[0], dummyData[1] ]);
});

test('should sort by Amount', () => {
  const filterObj = {
    text: '',
    sortBy: 'amount',
    startDate: undefined, 
    endDate: undefined
  };
  const result = selectExpenses( dummyData, filterObj );
  expect(result).toEqual([ dummyData[2], dummyData[1], dummyData[0] ]);
});