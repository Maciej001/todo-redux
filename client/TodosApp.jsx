import React from       'react';
import { store } from   './main.jsx';
import FilterLink from  './FilterLink.jsx';
import TodoItem from    './TodoItem.jsx';

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

class TodosApp extends React.Component {
  render() {
    const { todos, visibilityFilter, onTodoClick } = this.props;
    const visibleTodos = getVisibleTodos( todos, visibilityFilter );

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
            <TodoItem
              key={ todo.id }
              { ...todo }
              onTodoClick={ () => onTodoClick( todo.id ) }
            />
          )}
        </ul>

        <p>
          Show:
          {' | '}
          <FilterLink
            filter='SHOW_ALL'
            currentFilter={ visibilityFilter }
          >
            All
          </FilterLink>{' | '}

          <FilterLink
            filter='SHOW_COMPLETED'
            currentFilter={ visibilityFilter }
          >
            Completed
          </FilterLink>{' | '}

          <FilterLink
            filter='SHOW_ACTIVE'
            currentFilter={ visibilityFilter }
          >
            Active
          </FilterLink>
        </p>
      </div>
    )
  }
};

export default TodosApp;
