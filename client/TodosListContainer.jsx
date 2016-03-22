// import { Meteor } from 'meteor/meteor';
import React from 'react';
import { composeWithTracker } from 'react-komposer';
import TodosList from './TodosList.jsx';

function composer( props, onData ) {
  const todosSub = Meteor.subscribe('todos.list');

  if ( todosSub.ready() ) {
    const todos = Todos.find();
    onData(null, { todos });
  };
};

export default composeWithTracker(composer)(TodosList);
