import React          from 'react';
import { mount }      from 'react-mounter';
import { TodoApp }    from './main.jsx';
import TodosList      from './TodosList.jsx';

FlowRouter.route("/", {
  action() {
    mount(TodoApp, {
        content: <TodosList />
    });
  }
});
