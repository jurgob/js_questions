import React from 'react';
// import Link from 'react-router/Link'
import sectionsList from '../sectionsList';
import Select from 'react-select-plus';




const NavigationMobile = ({curPath,onPathChange}) => {

  // let options = sectionsList.map(({title,subsections}) => ({
  //   label: title,
  //   options: subsections.map(({label,link}) => ({
  //     label: label,
  //     value: link
  //   }))
  // }))

  const options = sectionsList.map(({title,subsections}) => (
    <optgroup label={title} >
      {subsections.map(({label,link}) => (
        <option value={link} >{label}</option>
      ))}
    </optgroup>
  ))

  return (
    <div style={{textAlign:"left"}} >
      <select
        style={{
          webkitAppearance:"none",
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
      {/* <Select
        name="form-field-name"
        options={options}
        value={curPath}
        clearable={false}
        placeholder="Jump to section..."
        onChange={(el) => onPathChange(el.value)}
      /> */}
    </div>
  )
}



export default NavigationMobile
