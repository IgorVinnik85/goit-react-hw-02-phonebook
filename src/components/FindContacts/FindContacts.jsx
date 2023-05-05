import React, { Component } from 'react';

export class FindContacts extends Component {
  // state = {
  //   name: '',
  // };

  // handleFindInput = event => {
  //   // console.log(event.target.value);
  //   //   this.setState({ name: event.target.value });
      
  //     this.props.onInput(event.target.value);
  // };

  render() {
    return (
      <div>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          placeholder="Enter find name"
          value={this.props.value}
          onChange={this.props.onInput}
        />
      </div>
    );
  }
}
