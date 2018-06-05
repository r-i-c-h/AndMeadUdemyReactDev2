import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (<div>
  Filter Descriptions by:
  <input 
    type="text" 
    value={props.filters.text} 
    onChange={ (e) => {
      props.dispatch( setTextFilter(e.target.value) );
    }}
  />
  Sort by:
  <select 
    value={props.filters.sortBy}
    onChange={ (e) => {
        if ( e.target.value === 'date'){
          props.dispatch( sortByDate() );
        } else if ( e.target.value === 'amount') {
          props.dispatch( sortByAmount() );
        }
      }
    }
  >
    <option value="amount">Amount</option>
    <option value="date">Date</option>
  </select>
</div>);

const mapStateFiltersToProps = state => {
  return { filters: state.filters };
};
export default connect(mapStateFiltersToProps)(ExpenseListFilters);