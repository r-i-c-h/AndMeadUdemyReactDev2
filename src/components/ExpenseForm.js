import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: ''
  }

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