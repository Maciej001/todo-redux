import React from       'react';
import { store } from   './main.jsx';
import FilterLink from  './FilterLink.jsx';

class Footer extends React.Component {
  render() {

    const { visibilityFilter, onFilterClick } = this.props;

    return (
      <p>
        Show:
        {' | '}
        <FilterLink
          filter='SHOW_ALL'
          currentFilter={ visibilityFilter }
          onClick={ onFilterClick }
        >
          All
        </FilterLink>{' | '}

        <FilterLink
          filter='SHOW_COMPLETED'
          currentFilter={ visibilityFilter }
          onClick={ onFilterClick }
        >
          Completed
        </FilterLink>{' | '}

        <FilterLink
          filter='SHOW_ACTIVE'
          currentFilter={ visibilityFilter }
          onClick={ onFilterClick }
        >
          Active
        </FilterLink>
      </p>
    );
  };
};

export default Footer;
