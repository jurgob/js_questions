import React from 'react';
// import Link from 'react-router/Link'
import sectionsList from '../sectionsList';
import Select from 'react-select-plus';




// const styles = {
//   link:{
//     padding:"10px",
//     textDecoration:"none",
//     display:"block",
//     color:"#666"
//   },
//   linkActive:{
//     color:"#000",
//     fontWeight:"bold"
//   }
// }


const NavigationMobile = ({curPath,onPathChange}) => {
  let options = sectionsList.map(({title,subsections}) => ({
    label: title,
    options: subsections.map(({label,link}) => ({
      label: label,
      value: link
    }))
  }))
  return (
    <div style={{textAlign:"left"}} >

      <Select
        name="form-field-name"
        options={options}
        value={curPath}
        clearable={false}
        placeholder="Jump to section..."
        onChange={(el) => onPathChange(el.value)}
      />
    </div>
  )
}



export default NavigationMobile
