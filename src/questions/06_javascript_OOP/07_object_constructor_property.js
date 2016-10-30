const shareCode = `
  function FF() {};
`
const shareCode1 = `
  function FF(){};
  var jj = new FF();
  var pp = Object.getPrototypeOf(jj);
`
const shareCode2 =`
  var pp = {};

  function F1() {}
  F1.prototype = pp;
  var xx = new F1();
`

const questions = [
  {
    code:`
      ${shareCode}
      log(FF.hasOwnProperty("prototype"));
    `
  },
  {
    code:`
      ${shareCode}
      log(Object.getOwnPropertyNames(FF.prototype).length);
    `
  },
  {
    code:`
      ${shareCode}
      log( Object.getOwnPropertyNames(FF.prototype)[0] );
    `
  },
  {
    code:`
      ${shareCode}
      log(
        Object.getOwnPropertyDescriptor(FF.prototype, "constructor").value === FF
      );
    `
  },
  {
    code:`
      ${shareCode}
      log(
        Object.getOwnPropertyDescriptor(FF.prototype, "constructor").writable
      );
    `
  },
  {
    code:`
      ${shareCode}
      log(
        Object.getOwnPropertyDescriptor(FF.prototype, "constructor").enumerable
      );
    `
  },
  {
    code:`
      ${shareCode}
      log(
        Object.getOwnPropertyDescriptor(FF.prototype, "constructor").configurable
      );
    `
  },
  {
    code:`
      ${shareCode}
      log(FF.prototype.constructor === FF)
    `
  },
  {
    code:`
      function FF(){};
      var jj = new FF();
      log(jj.hasOwnProperty("constructor"));
    `
  },
  {
    code:`
      function FF(){};
      var jj = new FF();
      log(
        Object.getPrototypeOf(jj).hasOwnProperty("constructor")
      );
    `
  },
  {
    code:`
      function FF () { };
      var myObj = new FF();
      log(
        myObj.constructor === FF
      );
    `
  },
  {
    code:`
      function FF () { };
      var myObj = new FF();
      log(
        Object.getOwnPropertyNames(myObj).length
      );
    `
  },
  {
    code:`
      ${shareCode1}
      log( jj.hasOwnProperty("constructor") )
    `
  },
  {
    code:`
      ${shareCode1}
      log( pp.hasOwnProperty("constructor") )
    `
  },
  {
    code:`
      ${shareCode1}
      log( pp.constructor === FF )
    `
  },
  {
    code:`
      ${shareCode2}
      log( xx.constructor === F1 )
    `
  },
  {
    code:`
      ${shareCode2}
      log( xx.constructor === Object )
    `
  },
  {
    code:`
      ${shareCode2}
      log(
        Object.getPrototypeOf(xx) === pp
      )
    `
  },
  {
    code:`
      ${shareCode2}
      log(
        Object.getPrototypeOf(pp) === Object.prototype
      )
    `
  },
  {
    code:`
      ${shareCode2}
      log(
        xx.hasOwnProperty("constructor")
      )
    `
  },
  {
    code:`
      ${shareCode2}
      log(
        pp.hasOwnProperty("constructor")
      )
    `
  },
  {
    code:`
      ${shareCode2}
      log(
        Object.prototype.hasOwnProperty("constructor")
      )
    `
  },
  {
    code:`
      ${shareCode2}
      log(
        Object.prototype.constructor === Object
      )
    `
  },
  {
    code:`
      var aa = [];
      log( aa.hasOwnProperty("constructor") );
    `
  },
  {
    code:`
      var aa = [];
      log( Object.getPrototypeOf(aa) === Array.prototype );
    `
  },
  {
    code:`
      var aa = [];
      log( Array.prototype.constructor === Array );
    `
  },
  {
    code:`
      var aa = [];
      log( Array.prototype.constructor === aa.constructor );
    `
  },
  {
    code:`
      var rr = /x/;
      log( rr.hasOwnProperty("constructor") );
    `
  },
  {
    code:`
      var rr = /x/;
      log( Object.getPrototypeOf(rr) === RegExp.prototype );
    `
  }
]
export default {
  label:`Property "constructor"`,
  link:"/object_constructor_property",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_object_constructor_property.html"
}
