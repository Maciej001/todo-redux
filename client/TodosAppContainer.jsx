import React                  from 'react';
import { composeWithTracker } from 'react-komposer';
import { TodosApp }           from './TodosApp.jsx';
import { store }              from './reducers.jsx';

function composer( props, onData ) {
  // spreads the store into todos and visibilityFilter
  onData( null, { ...store.getState() } );

  return store.subscribe(() => {
    onData( null, { ...store.getState() } )
  });
};

export default composeWithTracker( composer )( TodosApp );
