import React from 'react';
import { store } from './main.jsx';

class FilterLink extends React.Component {
  render() {
    const { filter, currentFilter, children } = this.props;
    if ( filter === currentFilter ) {
      return <span>{ children }</span>
    }
    return (
        <a href="#" onClick={ e => {
            e.preventDefault();
            store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter
            });
          }
        }> { children } </a>
    );
  };
}

export default FilterLink;
