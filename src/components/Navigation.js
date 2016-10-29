import React from 'react';
import Link from 'react-router/Link'

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
  <div style={{textAlign:"left"}} >
    {sections.map((m, idx) => (
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
        <Link
          to={m.link}
          style={styles.link}
          activeStyle={styles.linkActive}  >
            {m.label}
            <span style={{whiteSpace:"nowrap"}} > ({m.questions.filter(q => q.response === q.solution).length} / {m.questions.length})</span>
        </Link>
      </div>
    ))}
  </div>
)



export default Navigation
