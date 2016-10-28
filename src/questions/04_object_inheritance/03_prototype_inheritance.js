const questions = [
  {
    code:`
      var res = Object.getPrototypeOf(Object)   === Function.prototype;
      log(res)
    `
  },
  {
    code:`
      var res = Object.getPrototypeOf(Date)     === Function.prototype;
      log(res)
    `
  },
  {
    code:`
      var res = Object.getPrototypeOf(Date)     === Object.prototype;
      log(res)
    `
  },
  {
    code:`
      var res = Object.getPrototypeOf(JSON) === Object.prototype;
      log(res)
    `
  },
  {
    code:`
      var res = typeof Object;
      log(res)
    `
  },
  {
    code:`
      var obj = {};
      log(obj.prototype)
    `
  },
  {
    code:`
      var o1 = {};
      var FF = function () { };
      FF.prototype = o1;
      var o2 = new FF();

      log( Object.getPrototypeOf(o2) === o1 );
    `
  },
  {
    code:`
      var tt = Object.create(null)
      log(Object.getPrototypeOf(tt) === null)
    `
  },
  {
    code:`
      var o1 = Object.create(null)
      var o2 = {}
      log(Object.getPrototypeOf(o1) === Object.getPrototypeOf(o2))
    `
  },
  {
    code:`
      var o1 = {}
      var o2 = {}
      log(Object.getPrototypeOf(o1) === Object.getPrototypeOf(o2))
    `
  }
]
export default {
  label:"Prototype, Inheritance",
  link:"/object_prototype_inheritance",
  questions,
  tutorial_link:"http://xahlee.info/js/js_object_prototype_inheritance.html"
}
