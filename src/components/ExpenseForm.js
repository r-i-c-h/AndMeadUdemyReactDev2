import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// Doesn't actually hit a reducer because the same component works for both ADD and EDIT 
// - instead /those/ pass down their own versions of props.onSubmit() 
export default class ExpenseForm extends Component {
  state = {
    amount: '',
    createdAt: moment(),
    description: '',
    note: '',
    datePickerFocused: false,
    error: ''
  };
  /** Alternate Style of onChange Handling: Instead of starting with a var defined as e.target.value **/
  /** You CAN access the e.target.value directly, BUT you MUST call e.persist() first! **/
  /* handleFooChange = (e) => { e.persist(); this.setState(()=>{ foo: e.target.value}); } */
  handleDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState( ()=> ({description}) );
  };
  handleNoteTextChange = (e) => {
    const note = e.target.value;
    this.setState( ()=> ({note}) );
  };
  handleAmountChange = (e) => {
    const amount = e.target.value;
    if ( !amount || amount.match(/^\d+(\.\d{0,2})?$/) ) {
      this.setState( ()=> ({amount}) );
    }
  };
  handleDateChange = (createdAt) => { // per docs, this gets called with a new moment.js time Obj{} as the arg...
    if (createdAt) {  // This 'if' statement ensures the field is never empty\cleared by user...
      this.setState( ()=> ({createdAt}) );
    }
  };
  onFocusChange = ({ focused }) => { // <--req'd by Air-bnb date picker component
    this.setState( ()=> ({ datePickerFocused: focused }) );
  };
  onSubmit = (e) => {
    e.preventDefault();

    if ( !this.state.description || !this.state.amount ) {
      this.setState( () => ({ error: 'Description+Amount are REQUIRED in order to Submit!' }) );
    } else {
      this.setState( () => ({ error: '' }) );
      this.props.onSubmit({ // Call the passed-in Props version so we can reuse this ExpenseForm with either ADD or EDIT
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
      { this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.onSubmit}>
          <input type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            autoFocus
          />
          $<input type="text"
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
            isOutsideRange={()=>{false}} 
          />
          <textarea
            placeholder="Note to add..."
            onChange={this.handleNoteTextChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}