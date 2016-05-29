import React, { Component } from 'react';

import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

export default class TodoApp extends Component {

  constructor() {
    super();
    // set initial state
    this.state = {
      items: [],
    };

    this.updateItems = this.updateItems.bind(this);
  }

  updateItems(newItem) {
    console.log(newItem);
    const allItems = this.state.items.concat([newItem]);
    this.setState({ items: allItems });
  }

  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList items={this.state.items} />
        <TodoForm onFormSubmit={this.updateItems} />
      </div>
    );
  }
}
