const shareCode = `

  var t1 = {};
  var t2 = Object.create(t1);
  var t3 = Object.create(t2);
  var t4 = Object.create(t3);

`

const questions = [
  {
    code:`
      var myArray = [3,4];
      log(
        Object.getPrototypeOf(myArray) === myArray.__proto__
      );
    `
  },
  {
    code:`
      var myArray = [3,4];
      log(
        Object.getPrototypeOf(myArray) === myArray.prototype
      );
    `
  },
  {
    code:`
      var myArray = [3,4];
      log(
        Object.getPrototypeOf(myArray) === Array.prototype
      );
    `
  },
  {
    code:`
      ${shareCode}
      log( t1.isPrototypeOf(t4) )
    `
  },
  {
    code:`
      ${shareCode}
      log( t1.isPrototypeOf(t1) )
    `
  },
  {
    code:`
      ${shareCode}
      log( t3.isPrototypeOf(t1) )
    `
  },
  {
    code:`
      ${shareCode}
      log( Object.prototype.isPrototypeOf(t1) )
    `
  },
  {
    code:`
      ${shareCode}
      var obj = {}
      log( obj.isPrototypeOf(t1) )
    `
  },
  {
    code:`
      ${shareCode}
      var obj = {}
      log( obj.__proto__.isPrototypeOf(t1) )
    `
  }
]
export default {
  label:"Find Object's Parent",
  link:"/find_objects_prototype",
  questions,
  tutorial_link:"http://xahlee.info/js/js_find_objects_prototype.html"
}
