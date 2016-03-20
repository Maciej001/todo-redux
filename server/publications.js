Meteor.publish('todos.list', function( filter, pageSkip=0 ) {
  let query = {};

  const todoPubFields = {
    text: 1,
    completed: 1
  };

  switch ( filter ) {
    case 'SHOW_COMPLETED':
      query = { completed: true };
      break;
    case 'SHOW_ACTIVE':
      query = { completed: false };
      break;
    default:
      break;
  }

  return Todos.find( query, { fields: todoPubFields, skip: pageSkip, limit: 10 });
});
