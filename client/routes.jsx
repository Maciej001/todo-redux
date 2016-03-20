import React                from 'react';
import { mount }            from 'react-mounter';
import { TodoApp, store }   from './main.jsx';
import TodosContainer       from './TodosContainer.js';


FlowRouter.route("/", {
  action() {
    mount(TodoApp, {
        content: () => <TodosListContainer />
    });
  }
});
