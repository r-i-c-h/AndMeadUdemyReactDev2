import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses'; // wants Description, Note, Amount, CreatedAt

export class AddExpensePage extends Component {
  onSubmit = (expense) => {
    // /* props.dispatch(addExpense(expense)); <<< Taken care of by mapDispatchToProps */
    this.props.onSubmit(expense);
    this.props.history.push('/'); // history from `react-router` - effectively clears form by changing page
  }

  render(){
    return(
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
} 

const mapDispatchToProps = (dispatch) => {
  return { onSubmit: (expense) => dispatch(addExpense(expense)) };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

// connect 1st arg is mapStatesToProps
// connect 2nd arg is mapDispatchToProps