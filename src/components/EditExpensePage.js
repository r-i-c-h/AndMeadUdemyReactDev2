import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses'; //

const EditExpensePage = props => {
  console.log(props);
  return (
    <div>
      <h3>EDIT PAYMENT INFO:</h3>
      <p>Payment#: {props.match.params.id}</p>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.match.params.id, expense));
          props.history.push('/');
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.match.params.id }));
          props.history.push('/');
        }}
      >Remove
      </button>
    </div>
  );
};

const giveComponentCurrentExpenseObj = (state, props) => {
  //   ^^^ mapStateToProps() ^^^
  return {
    expense: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(giveComponentCurrentExpenseObj)(EditExpensePage);