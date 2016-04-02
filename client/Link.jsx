import React from       'react';
import { store } from   './reducers.jsx';

class Link extends React.Component {
  render() {
    const { active, children, onClick } = this.props;

    if ( active ) {
      return <span>{ children }</span>
    }
  return (
        <a href="#" onClick={ e => {
            e.preventDefault();
            onClick();
          }
        }>
          { children }
        </a>
    );
  };
}
export default Link;
