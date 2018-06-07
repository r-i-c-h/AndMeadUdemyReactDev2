import moment from 'moment';
import { 
  setStartDate, 
  setEndDate, 
  sortByAmount, 
  sortByDate, 
  setTextFilter 
} from '../../actions/filters';

test('should emit set startDate action obj', ()=> {
  const testVal = setStartDate(moment(0));
  
  expect( testVal ).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should emit set endDate action obj', ()=> {
  const testVal = setEndDate(moment(0));
  
  expect(testVal).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should emit sortBy Date actionObj', ()=>{
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
}); 

test('should emit sortBy Amount actionObj', ()=>{
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
}); 

test('should emit setTextFilter action obj with default values',()=> {
  const testVal = setTextFilter();
  expect(testVal).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  }); 
});

test('should emit setTextFilter action obj with specified value',()=> {
  const text = 'lorem ipsum yeah';
  const testVal = setTextFilter(text);
  expect(testVal).toEqual({ type: 'SET_TEXT_FILTER', text }); 
});