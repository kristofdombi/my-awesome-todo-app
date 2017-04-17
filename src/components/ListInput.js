import React, { Component } from 'react';
import './../styles/list-input.css';

class ListInput extends Component {

  render() {
    return (
      <div className="input-wrapper">
        <div
          className="add"
          onClick={ this.props.onClick }
        >+</div>
        <input
          type="text"
          placeholder="Add an item here"
          className="input"
          onChange={ (e) => this.props.onChange(e) }
        />
      </div>
    )
  }

}

export default ListInput;
