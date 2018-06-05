import React from 'react';
import { connect } from 'react-redux';
// connect is effective a higher-order-component that creates a version of ExpenseList with access to the store
// connectAPI: connect( state => {Info:to access})( Component to access it with )
import selectExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = props => (
  <div>
    <h1>Expense List Contents</h1>
    {props.expenses.map( exp => <ExpenseListItem key={exp.id} {...exp}/>)}
  </div>
);

const mapStateToProps = state => {
  return { 
    expenses: selectExpenses( state.expenses, state.filters )
  };
};

export default connect(mapStateToProps)(ExpenseList);