import React, { Component } from 'react';

import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

export default class TodoApp extends Component {

  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}
