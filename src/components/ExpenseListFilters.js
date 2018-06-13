import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from '../actions/filters';

export class ExpenseListFilters extends Component {
  state = {
    isCalendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  onFocusChange = (isCalendarFocused) => { 
    this.setState( () => ({isCalendarFocused}) );
  }
  
  onTextChange = (e) => {
      this.props.setTextFilter(e.target.value);
  }

  onSortPickerChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortPickerChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId={'foo'}
          endDate={this.props.filters.endDate}
          endDateId={'bar'}
          onDatesChange={this.onDatesChange}
          numberOfMonths={1}
          isOutsideRange={() => { false; }}
          showClearDates={true}
          focusedInput={this.state.isCalendarFocused}
          onFocusChange={this.onFocusChange}
        />
      </div>
    );
  }
}

const mapStateFiltersToProps = state => ({ filters: state.filters });

const mapDispatchToProps = dispatch => ({
  setTextFilter: ( textVal ) => dispatch(setTextFilter(textVal)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: ( startDate ) => dispatch(setStartDate(startDate)),
  setEndDate: ( endDate ) => dispatch(setEndDate(endDate))
})

export default connect(mapStateFiltersToProps, mapDispatchToProps)(ExpenseListFilters);