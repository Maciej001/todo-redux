import React from 'react';
import { combineReducers, createStore } from 'redux';

export const App = ({ content }) => (
  <div>
    <h1>Todo Redux App</h1>
    <div>{ content }</div>
  </div>
);

// Todo Reducer
const todo = ( state, action ) => {
  switch ( action.type ) {
    case 'ADD_TODO':

      return {
        id:         action.id,
        text:       action.text,
        completed:  false
      };
    case 'TOGGLE_TODO':
      if ( state.id !== action.id ) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
}

// Todos Reducer
const todos = ( state = [], action ) => {
  switch ( action.type ) {
    case 'ADD_TODO':
      return [
        ...state,
        todo( undefined, action )  // undefined - the todo doesn't yet exist
      ];
    case 'TOGGLE_TODO':
      return state.map( t => todo( t, action ) );
    default:
      return state;
  }
};

// Visibilily Reducer
const visibilityFilter = ( state = 'SHOW_ALL', action ) => {
  switch ( action.type ) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

// Create todoApp Reducer
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

// Create Store
export const store = createStore(todoApp);







































//
