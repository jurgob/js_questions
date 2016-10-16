const questions = [
  {
    code: `
      var arr = [];
      for (var i = 1; i <= 3; i++) { arr.push(i); }

      log(arr);
    `
  },
  {
    code: `
      log([0,undefined,1].length);
    `
  },
  {
    code: `
      log([0,1,undefined].length);
    `
  },
  {
    code: `
      log([ 'zero', 'one', , 'more' ].length);
    `
  },
  {
    code: `
      log([1,2, , 4 ]);
    `
  }

]

export default {
  label:"Array Basics",
  link:"/array_basics",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_array_basics.html"
}
