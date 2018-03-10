import React from 'react';
// import Link from 'react-router/Link'
import { NavLink } from 'react-router-dom'

const LinkButton = (props) => (
  <NavLink
    {...props}
    style={{
      display:"block",
      backgroundColor:"#ddd",
      color:"black",
      textDecoration:"none",
      padding:"10px",
      textAlign:"center"
    }}

  />
)

export default LinkButton;
