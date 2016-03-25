import React from       'react';
import { store } from   './main.jsx';
import FilterLink from  './FilterLink.jsx';

let newTodoId = 0;

const getVisibleTodos = ( todos, filter ) => {
  console.log(todos, filter);
  switch ( filter ) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter( t => t.completed );
    case 'SHOW_ACTIVE':
      return todos.filter( t => !t.completed );
  }
};

class TodosList extends React.Component {
  render() {
    const visibleTodos = getVisibleTodos( this.props.todos, this.props.visibilityFilter );
    return (
      <div>
        <h1>Todos List</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          store.dispatch({
            type: 'ADD_TODO',
            text: this.newTodo.value,
            id: newTodoId++
          });
          this.newTodo.value = '';
        }}>
          <input
            ref={ node => {
              this.newTodo = node;
            }}
          />
        </form>

        <ul>
          { visibleTodos.map( todo =>
            <li key={ todo.id }
              onClick={() => {
                store.dispatch({
                  type:   'TOGGLE_TODO',
                  id:     todo.id
                });
              }}

              style={{
                textDecoration: todo.completed ?
                  'line-through' : 'none'
              }}>

              { todo.text }
            </li>
          )}
        </ul>

        <p>
          Show:
          {' | '}
          <FilterLink filter='SHOW_ALL'>All</FilterLink>{' | '}
          <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>{' | '}
          <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
        </p>
      </div>
    )
  }
};

export default TodosList;
