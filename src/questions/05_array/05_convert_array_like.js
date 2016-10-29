const shareCode = `
  var alo = {0:"a", 1:"b", 2:"c", length:3};
  function append_z_to_string (x) {return x + "z"; }
  var myResult = Array.prototype.map.call( alo, append_z_to_string);
`

const questions = [
  {
    code:`
      var aa = {0:"a", 1:"b",2:"c", length:3};
      log( Array.isArray(aa) )
    `
  },
  {
    code:`
      var aa = {0:"a", 1:"b",2:"c", length:3};
      var bb = Array.prototype.slice.call(aa);

      log( Array.isArray(bb) )
    `
  },
  {
    code:`
      log(
        typeof Array === "function"
      );
    `
  },
  {
    code:`
      log(
        Object.prototype.hasOwnProperty.call(Array,"prototype")
      );
    `
  },
  {
    code:`
      log(
        Object.getPrototypeOf([]) === Array.prototype
      );
    `
  },
  {
    code:`
      log(
        Object.getPrototypeOf([]) === Object.prototype
      );
    `
  },
  {
    code:`
      log(
        Array.prototype.hasOwnProperty("length")
      );
    `
  },
  {
    code:`
      log(
        Array.prototype.hasOwnProperty("slice")
      );
    `
  },
  {
    code:`
      log(
        typeof Array.prototype.slice
      )
    `
  },
  {
    code:`
      log(
        Object.getPrototypeOf(Array.prototype.slice) === Object.prototype
      )
    `
  },
  {
    code:`
      log(
        Object.getPrototypeOf(Array.prototype.slice) === Function.prototype
      )
    `
  },
  {
    code:`
    log(
      Function.prototype.hasOwnProperty("call") &&
      (Object.getOwnPropertyNames(Function.prototype).indexOf("call") >= 0)
    )
    `
  },
  {
    code:`
      ${shareCode}
      log( Array.isArray(myResult) )
    `
  },
  {
    code:`
      ${shareCode}
      log(myResult)
    `
  }
]
export default {
  label:"Convert Array-Like Object",
  link:"/convert_array_like",
  questions,
  tutorial_link:"http://xahlee.info/js/js_convert_array-like.html"
}
