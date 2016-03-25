import React                  from 'react';
import { composeWithTracker } from 'react-komposer';
import TodosList              from './TodosList.jsx';
import { store }              from './main.jsx';

function composer( props, onData ) {
    onData( null, { ...store.getState() });

    return store.subscribe(() => {
      onData( null, { ...store.getState() } ) // spreads the store into todos and visibilityFilter
    });
};

export default composeWithTracker( composer )( TodosList );
