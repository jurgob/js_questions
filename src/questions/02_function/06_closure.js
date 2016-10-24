const shareCode = `
  function closure_context() {
      var x = 0;
      function f() {
          x += 1;
          return x;
      }
      return f;
  }

  var x = 6;
  var closure = closure_context();

  var x = 26;
`

const questions = [
  {
    code:`
      ${shareCode}
      log(closure())
    `
  },
  {
    code:`
      ${shareCode}
      closure()
      log(closure())
    `
  },
  {
    code:`
      ${shareCode}
      closure()
      closure()
      log(closure())
    `
  },
  {
    code:`
      ${shareCode}
      closure()
      closure()
      closure()
      log(x)
    `
  }
]

export default {
 label:"Closure",
 link:"/closure",
 questions,
 tutorial_link:"http://xahlee.info/js/javascript_closure.html"
}
