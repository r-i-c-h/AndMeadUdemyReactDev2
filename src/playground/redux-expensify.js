import { createStore, combineReducers } from 'redux';
// KEEPING ALL $ as PENNIES!   $545.00 ==> 54500cents
// # EXPENSE FUNCTIONS:
//    ADD_EXPENSE
//    REMOVE_EXPENSE
//    EDIT_EXPENSE
// # FILTER FUNCTIONS:
//    SET_TEXT_FILTER
//    SORT_BY_DATE
//    SORT_BY_AMOUNT
//    SET_START_DATE
//    SET_END_DATE 

const demoState = {
  expenses : [{
    id: 'whatevers',
    desc: 'Jan Rent',
    note: 'I have waaay too much debt',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endData: undefined
  }
};

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
  endDate: undefined,
  sortBy: 'date',
  startDate: undefined,
  text: ''
};

/* Expense Reducer: */
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch ( action.type ) {
    default:
      return state;
  }
};

/* Filters Reducers */
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch ( action.type ) {
    default:
      return state;
  }
};

/* STORE CREATION  - Combine Reducers */
const store = createStore( 
  combineReducers({ 
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());