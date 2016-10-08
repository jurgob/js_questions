import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './style.css'
import Navigation from '../Navigation';

const AnimatedPages = ({ children, location }) => (

  <div>
    <div>
      <Navigation />
    </div>
    <ReactCSSTransitionGroup
      component="div"
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={1000}
    >
      {React.cloneElement(children, {
        key: location.pathname
      })}
    </ReactCSSTransitionGroup>
  </div>
)

export default AnimatedPages;
