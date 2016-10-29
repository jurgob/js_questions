const questions = [
  {
    code:`
      var x = [3, 4];
      log(x.length)
    `
  },
  {
    code:`
      var x = [3, 4, ];
      log(x.length)
    `
  },
  {
    code:`
      var x = [3, 4, ,];
      log(x.length)
    `
  },
  {
    code:`
      var x = ["a", ,"c"];
      log(x[1])
    `
  },
  {
    code:`
      var x = ["a", ,"c"];
      log(x[2])
    `
  },
  {
    code:`
      var x = ["a", ,"c"];
      log(Object.getOwnPropertyNames(x).length)
    `
  },
  {
    code:`
      var r1 = new Array(2);
      log(r1.length)
    `
  },
  {
    code:`
      var r1 = new Array(2);
      log(Object.getOwnPropertyNames(r1).length)
    `
  },
  {
    code:`
      var r2 = [undefined,undefined];
      log(r2.length)
    `
  },
  {
    code:`
      var r2 = [undefined,undefined];
      log(Object.getOwnPropertyNames(r2).length)
    `
  },
  {
    code:`
      var a1 = new Array(3);
      a1 = a1.map(function(x){return 3;});
      log(a1[1])
    `
  },
  {
    code:`
      var a1 = [2,2,2];
      a1 = a1.map(function(x){return 3;});
      log(a1[1])
    `
  }

]
export default {
  label:"Create Array",
  link:"/create_array",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_create_array.html"
}
