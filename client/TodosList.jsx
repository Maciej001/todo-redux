import React from       'react';
import { store } from   './reducers.jsx';
import TodoItem from    './TodoItem.jsx';

class TodosList extends React.Component {
  render() {
    const { todos, onTodoClick } = this.props;
    return (
      <ul>
        { todos.map( todo =>
          <TodoItem
            key={ todo.id }
            { ...todo }
            onTodoClick={ () => onTodoClick( todo.id ) }
          />
        )}
      </ul>
    );
  };
};

export default TodosList;
