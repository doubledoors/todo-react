import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TodoForm extends Component {
  render() {
    return (
      <form>
        <input type="text" />
        <input type="submit" />
      </form>
    );
  }
}
