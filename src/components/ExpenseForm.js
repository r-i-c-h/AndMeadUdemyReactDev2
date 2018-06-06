import React, { Component } from 'react';
import moment from 'moment';

import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const now = moment();
// console.log(now.format('MMM Do, YYYY h:mA'));

export default class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    datePickerFocused: false
  };

  handleDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState( ()=> ({description}) );
  };
  /** Alternate Style of onChange Handling: Instead of starting with a var defined as e.target.value **/
  /** You CAN access the e.target.value directly, BUT you MUST call e.persist() first! **/
  /* handleFooChange = (e) => { e.persist(); this.setState(()=>{ foo: e.target.value}); } */
  handleNoteTextChange = (e) => {
    const note = e.target.value;
    this.setState( ()=> ({note}) );
  };
  handleAmountChange = (e) => {
    const amount = e.target.value;
    if ( amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState( ()=> ({amount}) );
    }
  };
  handleDateChange = (createdAt) => {
    // per docs, this gets called with a new moment time obj as the arg...
    this.setState( ()=> ({createdAt}) );
  };
  onFocusChange = ({ focused }) => {
    this.setState( ()=> ({ datePickerFocused: focused }) );
  };

  render() {
    return (
      <div>
        <form>
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          $<input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.handleDateChange}
            focused={this.state.datePickerFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={ () => { false } }
          />
          <textarea
            placeholder="Note to add..."
            onChange={this.handleNoteTextChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}