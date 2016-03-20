Meteor.methods({
  addTodo( text ) {
    check( text, String);

    return Todos.insert({
      text,
      completed: false
    });
  },

  toggleTodo( id ) {
    const todo = Todos.findOne({ _id: id });
    return Todos.update( { _id: id }, { $set: { completed: !todo.completed } } );
  }
});
