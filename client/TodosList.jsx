import React from       'react';
import { store } from   './main.jsx';

export default class TodosList extends React.Component {
  render() {
    console.log('rendering TodosList');
    return (
      <div>
        <button onClick={() => {
          store.dispatch({
            type:   'ADD_TODO',
            text:   'Test'
          })
        }}>
          Add Todo
        </button>
        <ul>
          { this.props.todos.map( todo =>
            <li key={ todo._id }>
              { todo.text }
            </li>
          )}
        </ul>
      </div>
    );
  }
};

TodosList.propTypes = {
  todosReady: React.PropTypes.bool,
  todos: React.PropTypes.array
};
