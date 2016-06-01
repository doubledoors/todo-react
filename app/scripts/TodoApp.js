import React, { Component } from 'react';

import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

export default class TodoApp extends Component {

  /* This component will hold the state for the entire app,
  taking values from the TodoForm child component and passing it into the TodoList */

  constructor() {
    super();
    // Set up state containing the items array
    this.state = {
      items: [],
    };
  }

  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList items={this.state.items} />
        <TodoForm />
      </div>
    );
  }
}
