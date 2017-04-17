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
      listItems: []
    };
  }

  componentWillMount() {
    this.setState({
      listItems: data
    });
  }

  handleListChange(clickedItem) {
    clickedItem.isDone = !clickedItem.isDone;
    this.setState((clickedItem) => {
      this.state.listItems.reduce((prev, next) => {
        if (next.name === clickedItem.name) {
          next = clickedItem;
        }
        return (
          prev.concat(next)
        )
      },[]);
    });
  }

  handleListInputChange(newItem) {
    this.setState({
      listItems: this.state.listItems.concat(newItem)
    });
  }

  render() {
    return (
      <div id="todo">
        <div className="header">My awesome todo app</div>
        <List
          listItems={ this.state.listItems }
          onChange={ this.handleListChange.bind(this) }
          onInputChange={ (newItem) => this.handleListInputChange(newItem) }
        />
      </div>
    );
  }

}

export default Todo;
