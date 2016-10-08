import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './style.css'
import Navigation from '../Navigation';


const ColLeft = ({children}) => (
  <div style={{
    float:"left",
    width:"33%",
    boxSizing: "border-box"
  }} >
    {children}
  </div>
)
const ColRight = ({children}) => (
  <div style={{
    float:"left",
    width:"66%",
    padding:"5px",
    boxSizing: "border-box"
  }} >
    {children}
  </div>
)

const Container = ({children}) => (
  <div>
    {children}
    <div  style={{
      clear:"both"
    }}  ></div>
  </div>
)



const AnimatedPages = ({ children, location }) => (

  <Container>
    <ColLeft>
      <Navigation />
    </ColLeft>
    <ColRight>
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
    </ColRight>
  </Container>
)

export default AnimatedPages;
