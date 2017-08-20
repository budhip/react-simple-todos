import React, { Component } from 'react';

class addItem extends Component {
  render = () => {
    return (
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem"/>
        <input type="submit" value="Tambah" />
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