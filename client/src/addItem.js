import React, { Component } from 'react';

class addItem extends Component {
  render = () => {
    return (
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem"/>
        <button type="submit"><i className="fa fa-plus"> Tambah</i></button>
      </form>
    );
  }
  //custom functions
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
    this.refs.newItem.value = '';
  }
}

export default addItem;
