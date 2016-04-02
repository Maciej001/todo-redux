import React from       'react';
import { store } from   './reducers.jsx';
import Link from        './Link.jsx';

class FilterLink extends React.Component {

  render() {
    const { filter, children } = this.props;
    const state = store.getState();

    return (
      <Link
        active={ filter === state.visibilityFilter }
        onClick={ () => store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter
          })
        }
      >
        { children }
      </Link>
    );
  };
}
export default FilterLink;
