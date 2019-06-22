import React from 'react';
// import Link from 'react-router/Link'
import { NavLink } from 'react-router-dom'

const LinkButton = (props) => (
  <NavLink
    {...props}
    className="LinkButton"

  />
)

export default LinkButton;
