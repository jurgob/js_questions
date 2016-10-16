const shareCode = `
  function f(x,y){
    return arguments.length;
}

`

const questions = [
  {
    code: `
      function f(x,y){
        return x + y;
      }
      log( f(3) )
    `
  },
  {
    code: `
      function f(x,y){
        return x + y;
      }
      function f(x){
        return ”jimmy”;
      }
      log( f(3,5) )
    `
  },
  {
    code: `
      ${shareCode}
      log(f(0))
    `
  },
  {
    code: `
      ${shareCode}
      log(f(0,1))
    `
  },
  {
    code: `
      ${shareCode}
      log(f([0,1,2],1))
    `
  },
]

export default {
 label:"Function Optional Parameters",
 link:"/javascript_function_arguments",
 questions,
 tutorial_link:"http://xahlee.info/js/javascript_function_arguments.html"
}
