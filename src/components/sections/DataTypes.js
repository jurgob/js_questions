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
  }

]
export default() => (
  <QuestionSection
    title="Data Types"
    introduction={<div>Data Types. <a href="http://xahlee.info/js/javascript_datatypes.html">Data Types</a> </div>}
    questions={questions}
  />

)
