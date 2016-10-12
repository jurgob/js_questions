// import WarmUp from './components/sections/WarmUp'
// import Basics from './components/sections/Basics'
// import DataTypes from './components/sections/DataTypes'
// import BooleanSection from './components/sections/Boolean'

export default [
  {
    title:"Warm Up",
    subsections:[
      {
        label:"Warm Up",
        link:"/warmup",
        questions:require('./questions/warmup').default,
      },
    ]
  },
  {
    title:"Javascript Basics",
    subsections:[
      {
        label:"Basics",
        link:"/basics",
        questions:require('./questions/basics').default,
        tutorial_link:"http://xahlee.info/js/javascript_basics.html"
      },
      {
        label:"Data Types",
        link:"/datatypes",
        questions:require('./questions/datatypes').default
      },
      {
        label:"Boolean",
        link:"/boolean",
        questions:require('./questions/boolean').default
      }
    ]

  }

  // {
  //   label:"Operators",
  //   link:"/operators",
  //   component:BooleanSection
  // },
  // {
  //   label:"Variables",
  //   link:"/variables",
  //   component:BooleanSection
  // },
  // {
  //   label:"Branch Control",
  //   link:"/branchcontrol",
  //   component:BooleanSection
  // },
  // {
  //   label:"Loop/Iteration",
  //   link:"/loop",
  //   component:BooleanSection
  // },
  // {
  //   label:"Array Basics",
  //   link:"/arraybasics",
  //   component:BooleanSection
  // },
  // {
  //   label:"Object Basics",
  //   link:"/objectbasics",
  //   component:BooleanSection
  // },
  // {
  //   label:"Functional Programming in Javascript",
  //   link:"/functionalprogramming",
  //   component:BooleanSection
  // },
  // {
  //   label:"Functional Optional Paramaters",
  //   link:"/functionaloptional",
  //   component:BooleanSection
  // },
  // {
  //   label:"Variable Declaration Order",
  //   link:"/variabledeclarationorder",
  //   component:BooleanSection
  // },
  // {
  //   label:"Function Declaration vs Function expression",
  //   link:"/function_declaration_expression",
  //   component:BooleanSection
  // },
  // {
  //   label:"Closure",
  //   link:"/closure",
  //   component:BooleanSection
  // },
  // {
  //   label:"Function Constructor",
  //   link:"/functionconstructor",
  //   component:BooleanSection
  // },
  // {
  //   label:"Property Names are Strings",
  //   link:"/property_names_are_strings",
  //   component:BooleanSection
  // },
  // {
  //   label:"Dot notation vs bracket Notation",
  //   link:"/dot_notation_vs_bracket_notation",
  //   component:BooleanSection
  // },
  // {
  //   label:"Checking Property Existence",
  //   link:"/checking_property_existence",
  //   component:BooleanSection
  // },
  // {
  //   label:"Object System Overview",
  //   link:"/object_system_overview",
  //   component:BooleanSection
  // },
  // {
  //   label:"What's Object",
  //   link:"/what_is_object",
  //   component:BooleanSection
  // },
  // {
  //   label:"Prototype & Inheritance",
  //   link:"/prototype_inheritance",
  //   component:BooleanSection
  // },
  // {
  //   label:"Find Object's Prototype",
  //   link:"/find_object_prototype",
  //   component:BooleanSection
  // },
  // {
  //   label:"Create Object with specified Parent",
  //   link:"/create_object_with_specified_parent",
  //   component:BooleanSection
  // },
  // {
  //   label:"Object.create()",
  //   link:"/object_create",
  //   component:BooleanSection
  // },
  // {
  //   label:"Call any f as method",
  //   link:"/call_any_f_as_method",
  //   component:BooleanSection
  // },
  // {
  //   label:"Prevent Modification of Object",
  //   link:"/prevent_modification_of_object",
  //   component:BooleanSection
  // },
  // {
  //   label:"Javascript Array",
  //   link:"/javascript_array",
  //   component:BooleanSection
  // },
  // {
  //   label:"Array Like Object",
  //   link:"/array_like_object",
  //   component:BooleanSection
  // },
  // {
  //   label:"Checking Property Existence",
  //   link:"/checking_property_existence",
  //   component:BooleanSection
  // },
  // {
  //   label:"Accessing & Listing Properties",
  //   link:"/accesssing_listing_properties",
  //   component:BooleanSection
  // },
  // {
  //   label:"Writable, Enuberable, Configurable",
  //   link:"/accesssing_listing_properties",
  //   component:BooleanSection
  // },
  // {
  //   label:"Getter & Setter",
  //   link:"/getter_setter",
  //   component:BooleanSection
  // },
  //
  // {
  //   label:"What's Constructor",
  //   link:"/what_is_constructor",
  //   component:BooleanSection
  // },
  // {
  //   label:"Keyword New",
  //   link:"/keyword_new",
  //   component:BooleanSection
  // },
  // {
  //   label:"Keyword This",
  //   link:"/keyword_this",
  //   component:BooleanSection
  // }
]
