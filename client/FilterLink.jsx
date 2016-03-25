import React from 'react';
import { store } from './main.jsx';

class FilterLink extends React.Component {
  render() {
    return (
        <a href="#" onClick={ e => {
            e.preventDefault();
            store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter: this.props.filter
            });
          }
        }> { this.props.children } </a>
    );
  };
}

export default FilterLink;