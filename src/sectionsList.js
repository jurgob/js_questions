// import WarmUp from './components/sections/WarmUp'
// import Basics from './components/sections/Basics'
// import DataTypes from './components/sections/DataTypes'
// import BooleanSection from './components/sections/Boolean'
// import requireDir from 'require-dir'
// var requireDir = require('require-dir');
// const warmUpSubs = requireDir('./questions/00_warmup')


export default [
  {
    title:"Warm Up",
    subsections:require('./questions/00_warmup').default,
  },
  {
    title:"Javascript Basics",
    subsections: require('./questions/01_javascript_basics').default,
  },
  {
    title:"Functional Programming in Javascript",
    subsections: require('./questions/02_function').default,
  }
]
