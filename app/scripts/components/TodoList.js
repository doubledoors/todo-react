import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export default class TodoList extends Component {

  createItem(itemText) {
    return (<TodoListItem>{itemText}</TodoListItem>);
  }

  render() {
    return <ul>{this.props.items.map(this.createItem)}</ul>;
  }
}
