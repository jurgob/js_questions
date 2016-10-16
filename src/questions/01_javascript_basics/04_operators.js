const questions = [
  {
    code: `
      var a;
      console.log(a = function(){return 4})
      log(a())
    `
  },
  {
    code: `
      function a(b,c){ return b + c  }
      var res = a( (b = 5), (c = 6)  );
      log(res)
    `
  },
  {
    code: `
      var x = (y = 5);
      log(x);
    `
  },
  {
    code: `
      var y = 4;
      var x = (y += 5);
      log(x)
    `
  },
  {
    code: `
      var x = 1;
      log(++x);
    `
  },
  {
    code: `
      var x = 1;
      ++x;
      log(x)
    `
  },
  {
    code: `
      var x = 1;
      log(x++)
    `
  },
  {
    code: `
      var x = 1;
      x++
      log(x)
    `
  }
]

export default {
  label:"Operators",
  link:"/operators",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_operators.html"
}
