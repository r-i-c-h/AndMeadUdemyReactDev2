import React from 'react';
import ExpenseList from './ExpenseList'; // ExpenseList is connected to store via react-redux's `connect(...)(ExpenseList)`
import ExpenseListFilters from './ExpenseListFilters'; // ExpenseList is connected to store via react-redux's `connect(...)(ExpenseList)`

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
); 

export default ExpenseDashboardPage;