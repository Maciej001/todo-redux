import React from       'react';
import { store } from   './main.jsx';
import TodosList from   './TodosList.jsx';

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

class VisibleTodoList extends React.Component {

  componentDidMount() {
    this.unsubscribe = store.subscribe( () => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { props } = this.props;
    const state = store.getState();

    return (
      <TodosList
        todos={ getVisibleTodos(
          state.todos,
          state.visibilityFilter
        )}
        onTodoClick={ id =>
          store.dispatch({ type: 'TOGGLE_TODO', id })
        }
      />
    );
  };
}
export default VisibleTodoList;
