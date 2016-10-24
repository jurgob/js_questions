const shareCode = `
  var a = {
    2:4
  }
`

const shareCode1 = `
  var propName = "prop1";
  var a = {
    propName:"jimmy"
  }
`

const questions = [
  {
    code:`
      ${shareCode}
      log(a[2])
    `
  },
  {
    code:`
      ${shareCode}
      log(a["2"])
    `
  },
  {
    code: `
      ${shareCode1}
      log( Object.keys(a)[0] )
    `
  },
  {
    code: `
      ${shareCode1}
      log( a[propName] )
    `
  },
  {
    code: `
      ${shareCode1}
      log( a["prop1"] )
    `
  },
  {
    code: `
      ${shareCode1}
      log( a.propName )
    `
  },
  {
    code: `
      ${shareCode1}
      log( a.prop1 )
    `
  }
]
export default {
  label:"Property Names Are Strings",
  link:"/property_names_are_strings",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_property_names_are_strings.html"
}
