const questions = [
  {
    code: `
      function ff() {
        function gg() {
          return 3;
        }
        return gg();
      };
      log(ff())
    `
  },
  {
    code: `
      function ff() {
        function gg() {
          return 3;
        }
        return gg();
      };
      log(typeof gg)
    `
  },
  {
    code:`
      var g = function f() { return 3; };
      log(typeof g)
    `
  },
  {
    code:`
      var g = function f() { return 3; };
      log(typeof f)
    `
  },
  {
    code:`
      var a = (function () { return 3; })()
      log( a )
    `
  },
  {
    code: `
      log((function (x) { return x; })(4))
    `
  },
  {
    code:`
      var h1 = new Function("return 3;");
      log(h1())
    `
  },
  {
    code:`
      var h2 = new Function("a", "return a;");
      log(h2(5))
    `
  }
]

export default {
  label:" Function Constructor",
  link:"/javascript_function_constructor",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_function_constructor.html"
}
