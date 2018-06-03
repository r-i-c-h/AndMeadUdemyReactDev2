// KEEPING ALL $ money values  as PENNIES!   $545.00 ==> 54500cents
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/*** EXPENSE FUNCTIONS: ***/
// ##  ADD_EXPENSE
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
    } = {}) => ({
      // need {} = {} to cover possibility of looking for missing properties on undefined
      // addExpense() returns an obj
      //  that obj will become the 'action' object / value of the dispatch 'action' var
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});
const editExpense = (id, updatesObj) => ({
  type: 'EDIT_EXPENSE',
  id,
  updatesObj
});

/*** FILTER FUNCTIONS: ***/
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});
const sortByDate = () => ({ type: 'SORT_BY_DATE' });
const sortByAmount = () => ({ type: 'SORT_BY_AMOUNT' });
const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});
const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*** EXPENSE REDUCER ***/
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]; //
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(thisExpense => {
        if (thisExpense.id === action.id) {
          return { ...thisExpense, ...action.updatesObj };
        } else {
          return thisExpense;
        };
      });
    default:
      return state;
  }
};

/*** FILTERS REDUCER: ***/
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Apply Filter to View: */
const getVisibleExpenses = (expenses, filters) => {
  const { text, sortBy, startDate, endDate } = filters;
  return expenses.filter(exp => {  
    const startDateOK = typeof startDate !== 'number' || exp.createdAt >= startDate;
    const endDateOK = typeof endDate !== 'number' || exp.createdAt <= endDate;
    const textOK = exp.description.toLowerCase().includes(text.toLowerCase());
    return startDateOK && endDateOK && textOK;
  }).sort( (a,b) => {
    // if (sortBy === 'date'){ return a.createdAt - b.createdAt; }
    // if (sortBy === 'amount'){ return a.amount - b.amount; }
    if (sortBy === 'date'){ 
      return a.createdAt < b.createdAt ? 1 : -1; 
    } else if (sortBy === 'amount'){ 
      return a.amount < b.amount ? 1 : -1; 
    }
  });
};
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* STORE CREATION  - Combines the Reducers 
//- it's like each Reducer has its own 'copy' of its part of the sub-state */
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
store.subscribe(() => {
  const st = store.getState();
  const visibleExpenses = getVisibleExpenses(st.expenses, st.filters);
  console.log(visibleExpenses);
});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/** EXAMPLES OF DISPATCHING  **/
const expenseTwo = store.dispatch(
  addExpense({ description: 'Coffee', amount: 100, createdAt: -1000 })
);
const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 100, createdAt: 1000 })
);
// store.dispatch( removeExpense( { id: expenseOne.expense.id } ) );
// store.dispatch( editExpense(expenseTwo.expense.id, { amount: 500 }) );
// store.dispatch(setTextFilter('rent'));
// store.dispatch( setTextFilter() );
// store.dispatch( setTextFilter('ffe') );
// store.dispatch( sortByAmount() );
// store.dispatch( sortByDate() );
// store.dispatch( setStartDate(0) )
// store.dispatch( setStartDate() )
// store.dispatch( setEndDate(999) )