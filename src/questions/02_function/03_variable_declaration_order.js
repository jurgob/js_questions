const questions = [
  {
    code:`
      (function(){

        log(typeof f );
        var f= function(){  return 4 }

      })()
    `
  },
  {
    code:`
      (function(){

        log(typeof f );
        function f(){  return 4 }

      })()
    `
  },
  {
    code:`
      log(x);
      var x = 5;
    `
  },
  {
    code:`
      var x;
      log(x);
      x = 5;
    `
  }



]

export default {
 label:"Variable Declaration Order",
 link:"/variable_declaration_order",
 questions,
 tutorial_link:"http://xahlee.info/js/javascript_name_hoisting_declaration_order.html"
}
