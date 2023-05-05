import React, { Component } from 'react';

export class FindContacts extends Component {
  state = {
    name: '',
  };

  handleFindInput = event => {
    // console.log(event.currentTarget.value);
      this.setState({ name: event.currentTarget.value });
      
      this.props.onInput(this.state.name)
  };

  render() {
    return (
      <div>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          placeholder="Enter find name"
          value={this.state.name}
          onChange={this.handleFindInput}
        />
      </div>
    );
  }
}
