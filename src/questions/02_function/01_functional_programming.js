const questions = [
  {
    code :`
      function sum(a) {

        var b = function (c) {
          return a + c
        }

        return b;
      }
      log( sum(4)(5) )
    `
  },
  {
    code :`
      function f1(n) {
          return 3
      }
      log ( typeof(f1) )
    `
  },
  {
    code :`
      function f1(n) {
          return 3
      }
      log ( typeof(f1()) )
    `
  },
  {
    code :`
      function f(n) {
        return function (x) { return (n + " and " + x ); };
      }
      log( typeof(f) )
    `
  },
  {
    code :`
      function f(n) {
        return function (x) { return (n + " and " + x ); };
      }
      log( typeof( f(3) ) )
    `
  },
  {
    code :`
      function f(n) {
        return function (x) { return (n + " and " + x ); };
      }
      log( typeof( f(3)(4) ) )
    `
  },
  {
    code :`
      function f(n) {
        return function (x) { return (n + " and " + x ); };
      }
      var f1 = f(3)
      log( f1 (3) )
    `
  },
  {
    code :`
      function f(n) {
        return function (x) { return (n + " and " + x ); };
      }
      log( f(3)(4) )
    `
  },

]

export default {
  label:"Functional Programming",
  link:"/functionalprogramming",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_lang_fun.html"
}
