import React, { Component } from 'react';

export default class TodoListItem extends Component {

  render() {
    return <h3>{this.props.children}</h3>;
  }
}
