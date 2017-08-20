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
        <TodoItem item={item} key={index} />
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

var TodoItem = React.createClass({
  render() {
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">
            {this.props.item}
          </span>
        </div>
      </li>
    );
  }
});

export default TodoComponent;
