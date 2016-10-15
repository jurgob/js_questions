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

export default {
  label:"Boolean",
  link:"/boolean",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_boolean.html"
}
