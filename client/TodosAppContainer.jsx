import React                  from 'react';
import { composeWithTracker } from 'react-komposer';
import { TodosApp }              from './TodosApp.jsx';
import { store }              from './main.jsx';

function composer( props, onData ) {
    const onTodoClick = id => store.dispatch({ type: 'TOGGLE_TODO', id });
    onData(
      null,
      {
        ...store.getState(),
        onTodoClick
      }
    );

    return store.subscribe(() => {
      onData( null, { ...store.getState(), onTodoClick } ) // spreads the store into todos and visibilityFilter
    });
};

export default composeWithTracker( composer )( TodosApp );
