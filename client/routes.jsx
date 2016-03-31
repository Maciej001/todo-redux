import React                from 'react';
import { mount }            from 'react-mounter';

import { TodoApp }   from './main.jsx';
import TodosAppContainer   from './TodosAppContainer.jsx';

FlowRouter.route("/", {
  action() {
    mount(TodoApp, {
        content: <TodosAppContainer />
    });
  }
});
