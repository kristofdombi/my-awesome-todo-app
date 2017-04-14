import React, { Component } from 'react';
import './../styles/list-input.css';

class ListInput extends Component {

  render() {
    return (
      <div className="input-wrapper">
        <div className="add">+</div>
        <input
          type="text"
          placeholder="Add an item here"
          className="input"
        />
      </div>
    )
  }

}

export default ListInput;
