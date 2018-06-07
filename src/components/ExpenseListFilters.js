import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from '../actions/filters';

class ExpenseListFilters extends Component {
  state = {
    isCalendarFocused: null
  };

  handleDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch( setStartDate(startDate) );
    this.props.dispatch( setEndDate(endDate) );
  }
  onFocusChange = (isCalendarFocused) => { 
    this.setState( () => ({isCalendarFocused}) );
  }
  
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.handleDatesChange}
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

const mapStateFiltersToProps = state => {
  return { filters: state.filters };
};

export default connect(mapStateFiltersToProps)(ExpenseListFilters);