import React from       'react';
import { store } from   './reducers.jsx';

class TodoItem extends React.Component {
  render() {
    const { text, completed, onTodoClick } = this.props;

    return (
      <li
        onClick={ onTodoClick }
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >

        { text }

      </li>
    );
  };
};

export default TodoItem;
