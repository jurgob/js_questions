const shareCode = `
  var F1 = function () { this.b = 4; };
  var F2 = function () { this.b = 4; return 3; };
  var F3 = function () { this.b = 4; return {"c":7}; };

  var x1 = new F1();
  var x2 = new F2();
  var x3 = new F3();
`

const shareCode1 = `
  var FF = function (xx) { return {"yy":3}; };
  var oo = new FF(3);
`

const questions = [
  {
    code:`
      function FF () {
        this.b = 4;
      }
      var x = new FF();
      log(x.b)
    `
  },
  {
    code:`
      ${shareCode}
      log(x1.b)
    `
  },
  {
    code:`
      ${shareCode}
      log(x2.b)
    `
  },
  {
    code:`
      ${shareCode}
      log(x2.c)
    `
  },
  {
    code:`
      ${shareCode}
      log(x3.b)
    `
  },
  {
    code:`
      ${shareCode}
      log(x3.c)
    `
  },
  {
    code:`
      var FF = function (xx) { this.yy = xx; };
      var oo = new FF(3);
      log( Object.getPrototypeOf(oo) === FF.prototype );
    `
  },
  {
    code:`
      ${shareCode1}
      log( Object.getPrototypeOf(oo) === FF.prototype )
    `
  },
  {
    code:`
      ${shareCode1}
      log( Object.getPrototypeOf(oo) === Object.getPrototypeOf({}) )
    `
  },
  {
    code:`
      ${shareCode1}
      log( Object.getPrototypeOf(oo) === Object.prototype )
    `
  },
  {
    code:`
      function FF () {};
      FF.prototype = {xx: 5};
      var aa = new FF();
      log(aa.xx);
    `
  },
  {
    code:`
      function FF () {};
      FF.prototype = {xx: 5};
      var aa = new FF();
      FF.prototype = {yy: 6};

      log(aa.yy);
    `
  }
]
export default {
  label:`Operator "new"`,
  link:"/keyword_new",
  questions,
  tutorial_link:"http://xahlee.info/js/js_keyword_new.html"
}
