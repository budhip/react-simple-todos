import React, { Component } from 'react';

class TodoItem extends Component {
  render = () => {
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <button className="item-delete" type="button" onClick={this.handleDelete}><i className="fa fa-trash"></i></button>
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
