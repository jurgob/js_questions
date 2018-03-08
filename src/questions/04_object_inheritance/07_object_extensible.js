// const shareCode = `
//   var uu = {};
//   Object.preventExtensions(uu);
// `
const questions = [
  {
    code:`
      log(Object.isExtensible(uu))
    `
  },
  {
    code:`
      uu.pp = 3;
      log(uu.hasOwnProperty("pp"))
    `
  },
  {
    code:`
      var t = {"p":3};
      Object.preventExtensions(t);
      delete t.p;
      log(t.p)
    `
  },
  {
    code:`
      var oo = {"p1":1, "p2":2};
      log(
        Object.getOwnPropertyDescriptor(oo, "p1").configurable
      )
    `
  },
  {
    code:`
      var oo = {"p1":1, "p2":2};
      log(
        Object.getOwnPropertyDescriptor(oo, "p1").writable
      )
    `
  },
  {
    code:`
      var oo = {"p1":1, "p2":2};
      Object.seal(oo);
      log(
        Object.getOwnPropertyDescriptor(oo, "p1").configurable
      )
    `
  },
  {
    code:`
      var oo = {"p1":1, "p2":2};
      Object.seal(oo);
      log(
        Object.getOwnPropertyDescriptor(oo, "p1").writable
      )
    `
  },
  {
    code:`
      var oo = {"p1":1, "p2":2};
      Object.seal(oo);
      log(
        Object.isExtensible(oo
      )
    `
  },
  {
    code:`
      var oo = {"p1":1, "p2":2};
      log(Object.getOwnPropertyDescriptor(oo, "p1").writable )
    `
  },
  {
    code:`
      var oo = {"p1":1, "p2":2};
      log(Object.getOwnPropertyDescriptor(oo, "p1").configurable )
    `
  },
  {
    code:`
      var oo = {"p1":1, "p2":2};
      Object.freeze(oo);
      log(Object.getOwnPropertyDescriptor(oo, "p1").writable )
    `
  },
  {
    code:`
      var oo = {"p1":1, "p2":2};
      Object.freeze(oo);
      log(Object.getOwnPropertyDescriptor(oo, "p1").configurable )
    `
  },
  {
    code:`
      var oo = {"p1":1, "p2":2};
      Object.freeze(oo);
      log(Object.isExtensible(oo) )
    `
  },
  {
    code:`
      var oo = {};
      log(Object.isFrozen(oo));
    `
  },
  {
    code:`
      var oo = {};
      Object.freeze(oo);
      log(Object.isFrozen(oo));
    `
  }



]
export default {
  label:"Prevent Modification of Object",
  link:"/object_extensible",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_object_extensible.html"
}
