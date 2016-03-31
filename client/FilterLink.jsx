import React from 'react';
import { store } from './main.jsx';
import Link from      './Link.jsx';

class FilterLink extends React.Component {

  // subscribe so that whenever state changes it will rerender an element
  componentDidMount() {
    this.unsubscribe = store.subscribe( () => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

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
