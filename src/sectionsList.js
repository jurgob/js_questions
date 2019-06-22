// import WarmUp from './components/sections/WarmUp'
// import Basics from './components/sections/Basics'
// import DataTypes from './components/sections/DataTypes'
// import BooleanSection from './components/sections/Boolean'
// import requireDir from 'require-dir'
// var requireDir = require('require-dir');
// const warmUpSubs = requireDir('./questions/00_warmup')

const sectionList = [
  require('./questions/00_warmup').default,
  require('./questions/01_javascript_basics').default,
  require('./questions/02_function').default,
  require('./questions/03_properties').default,
  require('./questions/04_object_inheritance').default,
  require('./questions/05_array').default,
  require('./questions/06_javascript_OOP').default,
]

const newsectionList = sectionList
  .map(sect => {
    const subsections = sect.subsections
      .map(subsect => {
          return {
            ...subsect,
            link: `/sections${subsect.link}`
          }
      })

    return {
      ...sect,
      subsections
    }
  })

console.log(sectionList)
export default newsectionList