import React from 'react';
import QuestionSection from '../QuestionSection'


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
export default() => (
  <QuestionSection
    title="Data Types"
    introduction={<div>Data Types. <a href="http://xahlee.info/js/javascript_datatypes.html">Data Types</a> </div>}
    questions={questions}
    nextLink="boolean"
  />

)
