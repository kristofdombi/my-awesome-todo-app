import React, { Component, PropTypes } from 'react';
import ListInput from './ListInput';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: {}
    };
  }

  handleListInputChange(e) {
    const newItem = {
      name: e.target.value,
      isDone: false
    };
    if (e.target.value) {
      this.setState({
        newItem: newItem
      });
    }
  }

  handleListInputClick() {
    if (this.state.newItem) {
      this.props.onInputChange(this.state.newItem);
    }
  }

  render() {
    return (
      <div>
        <div>
          <p>Unfinished tasks</p>
          <ListInput
            onChange={ (e) => this.handleListInputChange(e) }
            onClick={ this.handleListInputClick.bind(this) }
          />
          <ul className="unfinished-items">
            {
              this.props.listItems.filter(filteredItem => !filteredItem.isDone).map((item, i)=>(
                <li
                  key={`list-item-${i}`}
                  onClick={ () => this.props.onChange(item) }
                  className="unfinished-item"
                >
                  { item.name }
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <p>Done</p>
          <ul className="done-items">
            {
              this.props.listItems.filter(filteredItem => filteredItem.isDone).map((item, i)=>(
                <li
                  key={`list-item-${i}`}
                  onClick={ () => this.props.onChange(item) }
                  className="done-item"
                >
                  { item.name }
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }

}

List.propTypes = {
  listItems: PropTypes.array,
  onChange: PropTypes.func
};

export default List;
