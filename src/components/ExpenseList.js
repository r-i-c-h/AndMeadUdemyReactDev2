import React from 'react';
import { connect } from 'react-redux';
// connect is effectively a higher-order-component that creates a version of ExpenseList with access to the store
// connectAPI: connect( state => {Info:to access})( Component to access it with )
import selectExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = props => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No Expenses Reported In</p>
      ) : (
        props.expenses.map( exp => <ExpenseListItem key={exp.id} {...exp}/>)
      )
    }
  </div>
);

const mapStateToProps = state => {
  return { 
    expenses: selectExpenses( state.expenses, state.filters )
  };
};

export default connect(mapStateToProps)(ExpenseList);