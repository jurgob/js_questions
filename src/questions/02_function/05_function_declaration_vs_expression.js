const questions = [
  {
    code:`

      log(typeof f );
      var f= function(){  return 4 }

    `
  },
  {
    code:`
      log(typeof f );
      function f(){  return 4 }
    `
  },
]

export default {
 label:"Function Declaration vs Expression",
 link:"/function_declaration_vs_expression",
 questions,
 tutorial_link:"http://xahlee.info/js/javascript_function_declaration_vs_expression.html"
}
