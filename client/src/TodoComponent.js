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

  render = () => {
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return (
        <TodoItem item={item} key={index} onDelete={this.onDelete} />
      );
    }.bind(this));

    return (
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
        <ul>{todos}</ul>
      </div>
    );
  }

  //custom functions
  onDelete = (item) => {
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  }
}

var TodoItem = React.createClass({
  render: function() {
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    );
  },

  //custom functions
  handleDelete() {
    this.props.onDelete(this.props.item);
  }
});

export default TodoComponent;
