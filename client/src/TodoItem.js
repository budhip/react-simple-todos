import React, { Component } from 'react';

class TodoItem extends Component {
  render = () => {
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    );
  }
  //custom functions
  handleDelete = () => {
    this.props.onDelete(this.props.item);
  }
}

export default TodoItem;
