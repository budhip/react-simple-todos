import React, { Component } from 'react';
// import logo from './logo.svg';
import TodoItem from './TodoItem';
import AddItem from './addItem';

class TodoComponent extends Component {
  constructor() {
    super();
    this.state = {
      todos: ['Cuci Tangan!', 'Makan Keju!', 'Tidur!', 'Beli Bunga!']
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
        <AddItem onAdd={this.onAdd} />
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
  onAdd = (item) => {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  }
}

export default TodoComponent;
