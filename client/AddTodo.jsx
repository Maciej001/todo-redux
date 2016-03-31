import React from       'react';
import { store } from   './main.jsx';

class AddTodo extends React.Component {
  render() {
    const { onAddTodo } = this.props;
    let input;

    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        onAddTodo(input.value);
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
