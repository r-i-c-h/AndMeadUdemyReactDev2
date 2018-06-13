import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { dummyFilterDataByDate, dummyFilterDataByAmount } from '../FIXTURES/dummyFiltersData';
let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=> {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(<ExpenseListFilters 
      filters={dummyFilterDataByDate}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters aok', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with Alternate Data', () => {
  wrapper.setProps({filters:dummyFilterDataByAmount });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const someText = 'qui-doloribus-repudiandae';
  wrapper.find('input').simulate( 'change', { target:{ value: someText } } );
  expect(setTextFilter).toHaveBeenCalledWith(someText);
});

test('should handle sort change to sortByDate', () => {
  wrapper.setProps({filters:dummyFilterDataByAmount });
  wrapper.find('select').simulate('change',{ target: { value: 'date'} } );
  expect(sortByDate).toHaveBeenCalled();
});
 
test('should handle sort change to sortByAmount', () => {
  wrapper.find('select').simulate('change',{ target: { value: 'amount'} } );
  expect(sortByDate).not.toHaveBeenCalled();
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle dates change', () => {
  const startDate=moment(0).add(1,'years');
  const endDate=moment(0).add(99,'years');
  wrapper.find( 'withStyles(DateRangePicker)' ).prop('onDatesChange')({ startDate, endDate});
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});


test('should handle date-picker focus-change', () => {
  wrapper.find( 'withStyles(DateRangePicker)' ).prop('onFocusChange')('endDate');
  expect(wrapper.state('isCalendarFocused')).toBe('endDate');
  wrapper.find( 'withStyles(DateRangePicker)' ).prop('onFocusChange')('startDate');
  expect(wrapper.state('isCalendarFocused')).toBe('startDate');
});