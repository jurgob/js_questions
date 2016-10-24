const questions = [
  {
    code: `
      function f ()  {
        var n = 3;
        {
            var n = 4;
        }
        return n;
      };
      log(f())
    `
  },
  {
    code: `
      function f ()  {
        var n = 3;

        (function(){
          var n = 4;
        })();

        return n;
      };
      log(f())
    `
  }
]

export default {
 label:"Function Level Variable Scope",
 link:"/javascript_var_scope",
 questions,
 tutorial_link:"http://xahlee.info/js/javascript_var_scope.html"
}
