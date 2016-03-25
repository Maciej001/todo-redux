import React                  from 'react';
import { composeWithTracker } from 'react-komposer';
import TodosList              from './TodosList.jsx';
import { store }              from './main.jsx';

function composer( props, onData ) {
    onData( null, { todos: store.getState().todos });
    return store.subscribe(() => {
      const { todos } = store.getState();
      onData( null, { todos } )
    })
};

export default composeWithTracker( composer )( TodosList );
