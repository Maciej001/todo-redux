import React                from 'react';
import { mount }            from 'react-mounter';

import App                  from './App.jsx';
import TodosAppContainer    from './TodosAppContainer.jsx';

FlowRouter.route("/", {
  action() {
    mount(App, {
        content: <TodosAppContainer />
    });
  }
});
