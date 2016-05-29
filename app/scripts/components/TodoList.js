import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export default class TodoList extends Component {

  constructor() {
    super();
    this.createItem = this.createItem.bind(this);
  }

  createItem(itemText) {
    return (<TodoListItem key={Math.random()}>{itemText}</TodoListItem>);
  }

  render() {
    return <ul>{this.props.items.map(this.createItem)}</ul>;
  }
}
