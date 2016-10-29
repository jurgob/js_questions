const shareCode = `
  var o1 = {p1:1};
  var o2 = Object.create( o1,
    {"p2":
     { value : 2,
       writable: true,
       enumerable: true,
       configurable: true
     }
    }
  );
`
const shareCode1 = `
  var o1 = {"p":1};
  var o2 = Object.create(
    Object.prototype,
    { "p":
      {value:1, enumerable: true, configurable: true, writable: true}
    }
  );
`

const questions = [
  {
    code:`
      var o1 = {b:7};
      var o2 = Object.create(o1);
      log(Object.getPrototypeOf(o2) === o1);
    `
  } ,
  {
    code:`
      var xx = Object.create(null);
      var xy = {}
      log(Object.getPrototypeOf(xx) === xy);
    `
  },
  {
    code:`
      var xx = Object.create({});
      var xy = Object.create({});
      log(Object.getPrototypeOf(xx) === xy);
    `
  },
  {
    code:`
      var xx = Object.create(null);
      var xy = Object.create({});
      log(Object.getPrototypeOf(xx) === xy);
    `
  },
  {
    code:`
      ${shareCode}
      log(o2["p1"]);
    `
  },
  {
    code:`
      ${shareCode}
      log(o2["p2"]);
    `
  },
  {
    code:`
      var xx = Object.create( Object.prototype, { "p":{value:1} } );
      log(  Object.getOwnPropertyDescriptor(xx, "p").enumerable  );
    `
  },
  {
    code:`
      var o1 = {};
      log(Object.keys(o1).length);
    `
  },
  {
    code:`
      var o1 = {};
      log(Object.keys(o1).length);
    `
  },
  {
    code:`
      ${shareCode1}
      log(Object.getPrototypeOf(o1) === Object.getPrototypeOf(o2))
    `
  },
  {
    code:`
      ${shareCode1}
      log(o1 === o2)
    `
  },
  {
    code:`
      ${shareCode1}
      log(JSON.stringify(o1) === JSON.stringify(o2))
    `
  }
]
export default {
  label:"Object.create()",
  link:"/creating_object",
  questions,
  tutorial_link:"http://xahlee.info/js/js_creating_object.html"
}
