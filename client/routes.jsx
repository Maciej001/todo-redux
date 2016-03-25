import React                from 'react';
import { mount }            from 'react-mounter';

import { TodoApp }   from './main.jsx';
import TodosListContainer   from './TodosListContainer.jsx';

FlowRouter.route("/", {
  action() {
    mount(TodoApp, {
        content: <TodosListContainer />
    });
  }
});
