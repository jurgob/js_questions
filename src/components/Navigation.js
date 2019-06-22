import React from 'react';
import { NavLink } from 'react-router-dom'

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

const Navigation = ({sections}) => (
  <div className="Navigation" >
    {sections.map((m, idx) => (
      <div className="Navigation-section" key={idx}>
        <h1 className="Navigation-title">{m.title}</h1>
        <SectionLinks sections={m.subsections} />
      </div>
    ))}
  </div>
)

const SectionLinks = ({sections}) => (
  <div>

    {sections.map((m, idx) => (
      <div key={idx} >
        <NavLink
          to={m.link}
          style={styles.link}
          activeStyle={styles.linkActive}  >
            {m.label}
            <span style={{whiteSpace:"nowrap"}} > ({m.questions.filter(q => q.response === q.solution).length} / {m.questions.length})</span>
        </NavLink>
      </div>
    ))}
  </div>
)



export default Navigation
