import React from       'react';
import { store } from   './main.jsx';

import TodosList  from  './TodosList.jsx';
import TodoItem from    './TodoItem.jsx';
import AddTodo from     './AddTodo.jsx';
import Footer from      './Footer.jsx';

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

let newTodoId = 0;

class TodosApp extends React.Component {
  render() {
    const { todos, visibilityFilter, onTodoClick } = this.props;

    return (
      <div>
        <h1>Todos List</h1>

        <AddTodo onAddTodo={ text =>
            store.dispatch({
              type: 'ADD_TODO',
              text,
              id: newTodoId++
            })
          }
        />

        <TodosList
          todos={ getVisibleTodos( todos, visibilityFilter ) }
          onTodoClick={ id => store.dispatch({ type: 'TOGGLE_TODO', id }) }
        />

      <Footer
        visibililtyFilter={ visibilityFilter }
        onFilterClick={ filter =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          })
        }
      />



      </div>
    )
  }
};

export default TodosApp;
