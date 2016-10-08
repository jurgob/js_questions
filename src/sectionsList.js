import WarmUp from './components/sections/WarmUp'
import Basics from './components/sections/Basics'
import DataTypes from './components/sections/DataTypes'
import BooleanSection from './components/sections/Boolean'

export default [
  {
    label:"Warm Up",
    link:"/warmup",
    component:WarmUp
  },
  {
    label:"Basics",
    link:"/basics",
    component:Basics
  },
  {
    label:"Data Types",
    link:"/datatypes",
    component:DataTypes
  },
  {
    label:"Boolean",
    link:"/boolean",
    component:BooleanSection
  }
]
