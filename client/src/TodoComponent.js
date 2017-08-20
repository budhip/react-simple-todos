import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class TodoComponent extends Component {
  constructor() {
    super();
    this.state = {
      todos: ['wash up!', 'eat some cheese!', 'take a nap!', 'buy flowers!']
    }
  }

  render() {
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return (
        <li>{item}</li>
      );
    });

    return (
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoComponent;
