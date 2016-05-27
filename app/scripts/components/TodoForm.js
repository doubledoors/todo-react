import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TodoForm extends Component {

  constructor() {
    super();
    // set initial state
    this.state = {
      item: '',
    };
  }

  onChange = (e) => {
    this.setState({ item: e.target.value });
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.item);
    this.setState({ item: '' });
    ReactDOM.findDOMNode(this.refs.item);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="item" onChange={this.onChange} value={this.state.item} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}
