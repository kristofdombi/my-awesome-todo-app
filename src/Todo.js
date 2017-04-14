import React, { Component } from 'react';
import './styles/Todo.css';

// Component
import List from './components/TodoList';

// data
import data from './data.json';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listItems: data
    };
  }

  handleListChange(clickedItem) {
    clickedItem.isDone = !clickedItem.isDone;
    this.setState((clickedItem) => {
      this.state.listItems.reduce((prev, next) => {
        if (next === clickedItem) {
          next = clickedItem;
        }
        return (
          prev.concat(next)
        )
      },[]);
    });
  }

  render() {
    return (
      <div id="todo">
        <div className="header">My awesome todo app</div>
        <List listItems={ this.state.listItems } onChange={ this.handleListChange.bind(this) }/>
      </div>
    );
  }

}

export default Todo;
