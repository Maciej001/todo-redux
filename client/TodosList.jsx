import React from       'react';
import { store } from   './main.jsx';

const TodosList = ({ todos }) => (

      <div>
        <h1>Todos List</h1>
        <button onClick={() => {
            store.dispatch({
              type:   'ADD_TODO',
              text:   'Test'
            })
          }}>
          Add Todo
        </button>
        <ul>
          { todos.map( todo =>
            <li key={ todo._id }>
              { todo.text }
            </li>
          )}
        </ul>
      </div>
);

export default TodosList

// TodosList.propTypes = {
//   todosReady: React.PropTypes.bool,
//   todos: React.PropTypes.array
// };
