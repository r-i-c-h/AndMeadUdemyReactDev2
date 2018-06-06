import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import 'react-dates/initialize';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// DUMMY DATA TO FUTZ WITH
store.dispatch( addExpense({description:'Water Bill created1st', amount:9999 } ) );
store.dispatch( addExpense({description:'Gas Bill lastDate ZeroAmt', createdAt:1000 } ) );
store.dispatch( addExpense({description:'Rent highestAmt', amount:105000 } ) );
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const jsx = (   // For whatever reason, this must be spread over multiple lines !!WARN!!
  <Provider store={store}>
    <AppRouter /> 
  </Provider> 
);

ReactDOM.render(jsx, document.getElementById('app'));
// ReactDOM.render(<AppRouter />, document.getElementById('app'));
