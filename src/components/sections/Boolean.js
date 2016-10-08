import React from 'react';
import QuestionSection from '../QuestionSection'


const questions = [
  {
    text:"boolean creation",
    code :"var a = Boolean(0); log(a);"
  },
  {
    text:"boolean creation",
    code :"var a = Boolean(0.0); log(a);"
  },
  {
    text:"boolean creation",
    code :"var a = Boolean(0.); log(a);"
  },
  {
    text:"boolean creation",
    code :"var a = Boolean(.0); log(a);"
  },
  {
    text:"boolean creation",
    code :"var a = Boolean(''); log(a);"
  },
  {
    text:"boolean creation",
    code :"var a = Boolean(null); log(a);"
  },
  {
    text:"boolean creation",
    code :"var a = Boolean(undefined); log(a);"
  },
  {
    text:"boolean creation",
    code :"var a = Boolean(NaN); log(a);"
  },

  {
    text:"boolean creation",
    code :"var a = Boolean('true'); log(a);"
  },
  {
    text:"boolean creation",
    code :"var a = Boolean('false'); log(a);"
  },

  {
    text:"boolean creation",
    code :"var a = Boolean(1); log(a);"
  },
  {
    text:"boolean creation",
    code :"var a = Boolean(-1); log(a);"
  },
  {
    text:"boolean creation",
    code :"var a = Boolean(Infinity); log(a);"
  },
  {
    text:"boolean creation",
    code :"var a = Boolean({}); log(a);"
  },
  {
    text:"boolean creation",
    code :"var a = Boolean([]); log(a);"
  },
  {
    text:"boolean creation",
    code :"var a = Boolean(function(){}); log(a);"
  },

]
export default() => (
  <QuestionSection
    title="Boolean"
    introduction={<div>Boolean. <a href="http://xahlee.info/js/javascript_boolean.html">xahlee.info/js/javascript_boolean</a> </div>}
    questions={questions}
  />

)
