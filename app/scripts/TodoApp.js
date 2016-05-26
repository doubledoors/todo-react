// ES6 Destructuring going on here. {Component and PropTypes} - look up.
import React, { Component, PropTypes } from 'react';

export default class TodoApp extends Component {

  getInitialState: function(){
    return {items: []};
  },
  updateItems: function(newItem){
    var allItems = this.state.items.concat([newItem]);
    this.setState({items: allItems});
  },
  render() {
    return (
      <div>
        <TodoBanner/>
        <TodoList items={this.state.items}/>
        <TodoForm onFormSubmit={this.updateItems}/>
      </div>
    );
  }
}
