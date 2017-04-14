import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todo />, div);
});
