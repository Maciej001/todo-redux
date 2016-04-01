import React from       'react';
import { store } from   './main.jsx';

let newTodoId = 0;

class AddTodo extends React.Component {
  render() {
    const { onAddTodo } = this.props;
    let input;

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        store.dispatch({
          type: 'ADD_TODO',
          text: input.value,
          id: newTodoId++
        })
        input.value = '';
      }}>
        <input
          ref={ node => {
            input = node;
          }}
        />
      </form>
    );
  };
};

export default AddTodo;
