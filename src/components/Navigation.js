import React from 'react';
import {withRouter, Link} from 'react-router'
import sectionsList from '../sectionsList';


const styles = {
  link:{
    display:"inlineBlock",
    padding:"10px",
    textDecoration:"none"
  },
  linkActive:{
    borderBottom:"1px solid grey"
  }
}

const Navigation = (props) => (
  <div>
    {sectionsList.map((m, idx) => (
      <span key={idx} >
        <Link to={m.link} style={styles.link}  activeStyle={styles.linkActive}  >{m.label}</Link>
      </span>
    ))}
  </div>
)

export default withRouter(Navigation)
