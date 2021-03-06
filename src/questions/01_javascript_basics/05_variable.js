const questions = [
  {
    code:`
      var n = 2;
      function f ()  {
        var n = 3;
        {
            log(n)
            var n = 4;
        }
      }
      f()
    `
  },
  {
    code:`
      var n = 2;
      function f ()  {
        var n = 3;
        {
            var n = 4;
        }
        log(n);
      }
      f()
    `
  },
  {
    code:`
      var n = 2;
      function f ()  {
        var n = 3;
        {
            var n = 4;
        }
      }
      f();
      log(n)
    `
  },
]

export default {
  label:"Variable",
  link:"/variable",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_variable.html"
}
