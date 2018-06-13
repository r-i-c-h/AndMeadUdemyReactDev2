import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
// DUMMY DATA For Development
// store.dispatch( addExpense({description:'Water Bill', amount:9999 } ) );
// store.dispatch( addExpense({description:'Gas Bill', amount:30000, createdAt:1528361063331 } ) );
// store.dispatch( addExpense({description:'Rent', amount:105000 } ) );
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const jsx = (   // For whatever reason, this must be spread over multiple lines !!WARN!!
  <Provider store={store}>
    <AppRouter /> 
  </Provider> 
);

ReactDOM.render(jsx, document.getElementById('app'));