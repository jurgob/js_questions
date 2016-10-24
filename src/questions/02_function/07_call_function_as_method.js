const shareCode = `
  function ff(x) {
    this["p"] = x;
  };
  var bb = {"b":2};
  var gg = ff.bind(bb,7);
  gg();
`;

const questions = [
  {
    code:`
      function ff() {
        return this;
      };

      var obj = {};

      log( ff.call(obj) === obj );
    `
  },
  {
    code:`
      function ff(x,y,z) {
        this["x"] = x;
        this["y"] = y;
        this["z"] = z;
      };

      var oo = {};

      ff.apply(oo,[7,8,9]);
      log(oo.y)
    `
  },
  {
    code:`
      function ff(x,y,z) {
        this["x"] = x;
        this["y"] = y;
        this["z"] = z;
      };

      var oo = {};

      ff.apply(oo,[7,8,9]);
      log(oo.a)
    `
  },
  {
    code: `
      var b = 1
      var aa = {
        "b": 3,
        "ff":function () { return this;}
      };

      var bb = {"b":2};
      var gg = aa.ff.bind(bb);

      log(gg().b);
    `
  },
  {
    code:`
      ${shareCode}
      log(bb.b)
    `
  },
  {
    code:`
      ${shareCode}
      log(bb.p)
    `
  }

]

export default {
  label:"f.call f.apply f.bind",
  link:"/call_function_as_method",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_call_function_as_method.html"
}
