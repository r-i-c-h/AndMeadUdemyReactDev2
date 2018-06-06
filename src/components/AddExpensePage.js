import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses'; // wants Description, Note, Amount, CreatedAt

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={ (expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/'); // history is from from react-router
      }}
    
    />
  </div>
); 

export default connect()(AddExpensePage);   