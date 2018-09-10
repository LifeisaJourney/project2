import React, { Component } from 'react';

export default class NewForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.submitButton(this.props.task)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.props.handleUpdateInput}
            value={this.props.zipcode}
            type="text"
            className='form'
            maxLength='5'
          >
          </input>
          <button
            className='submitButton'
          >
            SUBMIT
          </button>
        </form>
      </div>
    )
  }
}