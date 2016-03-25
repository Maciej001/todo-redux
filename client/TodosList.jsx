import React from       'react';
import { store } from   './main.jsx';


const TodosList = ({ todos , addTodo }) => (
      <div>
        <h1>Todos List</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          store.dispatch({
            type: 'ADD_TODO',
            text: this.newTodo.value
          });
          this.newTodo.value = '';
        }}>
          <input
            ref={ node => {
              this.newTodo = node;
            }}
          />
        </form>
        <button >
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
