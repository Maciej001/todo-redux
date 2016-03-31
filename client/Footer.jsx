import React from       'react';
import { store } from   './main.jsx';
import FilterLink from  './FilterLink.jsx';

class Footer extends React.Component {
  render() {
    return (
      <p>
        Show:
        {' | '}
        <FilterLink filter='SHOW_ALL'>
          All
        </FilterLink>{' | '}

        <FilterLink filter='SHOW_COMPLETED'>
          Completed
        </FilterLink>{' | '}

        <FilterLink filter='SHOW_ACTIVE'>
          Active
        </FilterLink>
      </p>
    );
  };
};

export default Footer;
