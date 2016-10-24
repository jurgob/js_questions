import React from 'react';

const NavigationMobile = ({curPath,onPathChange, sections}) => {

  const options = sections.map(({title,subsections}) => (
    <optgroup label={title} key={title} >
      {subsections.map(({label,link, questions}) => (
        <option key={link}  value={link} >{label} {" "}
        ({questions.filter(q => !!q.response).length} / {questions.length}) </option>
      ))}
    </optgroup>
  ))

  return (
    <div style={{textAlign:"left"}} >
      <select
        style={{
          WebkitAppearance:"none",
          borderRadius:"0",
          background: "none",
          border:"1px solid #ccc",
          display:"block",
          width:"100%",
          padding:"5px",
          fontSize:"15px"
        }}
        name="form-field-name"
        value={curPath}
        onChange={(e) => onPathChange(e.target.value)}
      >
        <option value="/" >Jump to section...</option>
        {options}
      </select>
    </div>
  )
}



export default NavigationMobile
