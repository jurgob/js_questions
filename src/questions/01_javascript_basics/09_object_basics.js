// const shareCode1 = `
//   var j = {};
//   var y = 12
//   j.y = 5;
//   var myFunc = function (x) {
//     return  x + this.y;
//   };
//   j.m =  myFunc;
// `

const questions = [
  {
    code: `
      var obj = {a: "first one",b : "second one" }
      delete obj.a
      log(Object.keys(obj))
    `
  },
  {
    code: `
      var obj = {a: "first one",b : "second one" }
      obj.a = undefined
      log(Object.keys(obj))
    `
  },
  {
    code: `
      ${shareCode1}
      log( typeof(j.m) )
    `
  },
  {
    code: `
      ${shareCode1}
      log( j.m() )
    `
  },
  {
    code: `
      ${shareCode1}
      log( typeof j.myFunc )
    `
  },
  // {
  //   code: `
  //     ${shareCode1}
  //     log( myFunc(3) )
  //   `
  // }
]

export default {
  label:"Object Basics",
  link:"/object_bsics",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_object_basics.html"
}
