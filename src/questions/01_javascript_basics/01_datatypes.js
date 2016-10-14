const questions = [
  {
    text:"default assignment",
    code :"var a; log(a);"
  },
  {
    text:"type of null",
    code :"var a = typeof(null); log(a);"
  },
  {
    text:"type of undefined",
    code :"var a = typeof(undefined); log(a);"
  },
  {
    text:"type of NaN",
    code :"var a = typeof(NaN); log(a);"
  },
  {
    text:"type of function ",
    code :"var a = typeof( function() { return 3 }  ); log(a);"
  },
  {
    text:"typeof syntax ",
    code :"var a = typeof 5 ; log(a);"
  },
  {
    text:"typeof syntax",
    code :"var a = typeof(5); log(a);"
  },
]

export default {
  label:"Data Types",
  link:"/datatypes",
  questions
}
