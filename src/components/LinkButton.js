import React from 'react';
import Link from 'react-router/Link'

const LinkButton = (props) => (
  <Link
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
