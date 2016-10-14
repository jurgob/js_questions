import React from 'react';
import Link from 'react-router/Link'
import sectionsList from '../sectionsList';


const styles = {
  link:{
    padding:"10px",
    textDecoration:"none",
    display:"block",
    color:"#666"
  },
  linkActive:{
    color:"#000",
    fontWeight:"bold"
  }
}

const Navigation = (props) => (
  <div style={{textAlign:"left"}} >
    {sectionsList.map((m, idx) => (
      <div key={idx} style={{paddingBottom:"20px"}} >
        <b>{m.title}</b>
        <SectionLinks sections={m.subsections} />
      </div>
    ))}
  </div>
)

const SectionLinks = ({sections}) => (
  <div>
    {sections.map((m, idx) => (
      <div key={idx} >
        <Link to={m.link} style={styles.link}  activeStyle={styles.linkActive}  >{m.label}</Link>
      </div>
    ))}
  </div>
)


export default Navigation
