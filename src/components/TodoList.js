import React, { Component, PropTypes } from 'react';
import ListInput from './ListInput';

class List extends Component {

  render() {
    return (
      <div>
        <div>
          <p>Unfinished tasks</p>
          <ListInput />
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
