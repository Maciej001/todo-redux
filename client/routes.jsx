import React from 'react';
import { mount } from 'react-mounter';
import { TodoApp, Todos } from './main.jsx';

FlowRouter.route("/", {
  action() {
    mount(TodoApp, {
        content: <Todos />
    });
  }
});
