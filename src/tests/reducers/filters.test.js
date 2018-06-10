import moment from 'moment';
import filtersReducer from '../../reducers/filters';

const defaultFilterState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}; 

test('should setup with default filter values', ()=> {
  const state = filtersReducer(undefined, {type:'@@INIT'});
  expect(state).toEqual(defaultFilterState);
});

test('should change sorting on sortByAmount', ()=>{
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should change sorting on sortByDate', ()=>{
  const mockAction = {type: 'SORT_BY_DATE'};
  const state = filtersReducer({ sortBy:'amount' }, mockAction);
  expect(state.sortBy).toBe('date');
});

test('it should change the text filter', ()=>{
  const txt = 'Lorem Impsum 123';
  const mockAction = {type: 'SET_TEXT_FILTER', text:txt};
  const state = filtersReducer({}, mockAction);
  expect(state.text).toBe(txt);
});

test('it should change the start date', ()=>{
  const someTime = moment();
  const mockAction = {type:'SET_START_DATE', startDate:someTime};
  const state = filtersReducer({}, mockAction);
  expect(state.startDate).toEqual(someTime);
});

test('it should change the end date', ()=>{
  const someTime = moment();  
  const mockAction = {type:'SET_END_DATE', endDate:someTime};
  const state = filtersReducer({}, mockAction);
  expect(state.endDate).toBe(someTime);
});