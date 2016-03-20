import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import TodosList from './TodosList.jsx';

export default createContainer( { params } => {
  const todosSub = Meteor.subscribe('todos.list');
  const todosReady = todosSub.ready();
  let todos = Todos.find();

  return { todosReady, todos };

}, TodosList );
