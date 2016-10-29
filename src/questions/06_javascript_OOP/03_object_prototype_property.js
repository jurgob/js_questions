const questions = [
  {
    code:`
        log(
          Function.hasOwnProperty("prototype") ===
          Array.hasOwnProperty("prototype") ===
          Object.hasOwnProperty("prototype") ===
          Date.hasOwnProperty("prototype") ===
          true
        )
    `
  },
  {
    code:`
      log(
        (function () {}).hasOwnProperty("prototype")
      );
    `
  },
  {
    code:`
      function ff () {};
      var x = new ff();

      log(
        Object.getPrototypeOf(x) === ff.prototype
      );
    `
  },
  {
    code:`
      function ff () {};
      var x = new ff();

      log(
        Object.getPrototypeOf(x) === Object.getPrototypeOf(ff)
      );
    `
  },
  {
    code:`
      function ff () {};

      log(
        Object.getPrototypeOf(ff) === ff.prototype
      );
    `
  },
  {
    code:`
      function FF() {};
      log(FF.hasOwnProperty("prototype"));
    `
  },
  {
    code:`
      log(
        Object.getOwnPropertyNames(FF.prototype).length
      )
    `
  },
  {
    code:`
      log(
        Object.getOwnPropertyNames(FF.prototype)[0] === "constructor"
      );
    `
  },
  {
    code:`
      log(
        Object.getOwnPropertyNames(FF.prototype)[0] === "length"
      );
    `
  },
  {
    code:`
      log(
        Object.getOwnPropertyDescriptor(FF.prototype, "constructor").writable
      )
    `
  },
  {
    code:`
      log(
        Object.getOwnPropertyDescriptor(FF.prototype, "constructor").enumerable
      )
    `
  },
  {
    code:`
      log(
        Object.getPrototypeOf(new Object())   === Object.prototype
      )
    `
  },
  {
    code:`
      log(
        Object.getPrototypeOf(new Array())   === Object.prototype
      )
    `
  },
  {
    code:`
      log(
        Object.getPrototypeOf(new Array())   === Array.prototype
      )
    `
  },
  {
    code:`
      var pro = {}
      var Pro = function(){}
      Pro.prototype = pro

      log(
        Pro.prototype === pro
      )
    `
  },
  {
    code:`
      var pro = {}
      Array.prototype = pro

      log(
        Array.prototype === pro
      )
    `
  }

]
export default {
  label:"Property \"prototype\"",
  link:"/object_prototype_property",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_object_prototype_property.html"
}
