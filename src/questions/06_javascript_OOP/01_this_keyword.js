const shareCode = `
  var oo = {"ff": function () { this.ppp = 4; }}
  var x7 = new oo.ff();
`

const questions = [
  {
    code:`
      var ff = function () { return this; };
      var oo = { p1: ff};
      log(oo === oo.p1)
    `,
    solution:false
  },
  {
    code:`
      var ff = function () { return this; };
      var oo = { p1: ff};
      log(oo === oo.p1())
    `,
    solution:true
  },
  {
    code:`
      var Ff = function () { this.ppp = 4; };
      var x8 = new Ff();
      log(x8.ppp);
    `,
    solution:4
  },
  {
    code:`
      ${shareCode}
      log(x7.hasOwnProperty("ppp"))
    `,
    solution: true
  },
  {
    code:`
      ${shareCode}
      log( oo.hasOwnProperty("ppp") )
    `,
    solution: false
  },
  {
    code:`
      "use strict"
        var ff = function () { return this; };
        log(ff());
    `,
    solution: undefined
  },
  {
    code:`
      var ff = function () { return this; };
      log( ff() === window)
    `,
    solution: true
  },
  {
    code:`
      var o = {
        ff:function () {
            var gg = function () {
            return this;
            };
            return gg();
        }
      };
      log(o.ff() === undefined)
    `,
    solution:true
  }
]
export default {
  label:"Keyword \"this\"",
  link:"/function_this_keyword",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_function_this_keyword.html"
}
