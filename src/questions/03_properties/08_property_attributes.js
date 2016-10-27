const shareCode = `
  var x = {"p":4};
  var desc = Object.getOwnPropertyDescriptor(x, "p");
`

const shareCode2 =`
  var x = {};
  Object.defineProperty(
    x,
    "p",
    { value : 3, writable: true, enumerable: false, configurable: true}
  );
`
const shareCode3 =`
  var ox = {};
  Object.defineProperty(ox, "p", {} );
`

const questions = [
  {
    code:`
      ${shareCode}
      log(desc.value)
    `
  },
  {
    code:`
      ${shareCode}
      log(desc.writable)
    `
  },
  {
    code:`
      ${shareCode}
      log(desc.enumerable)
    `
  },
  {
    code:`
      ${shareCode}
      log(desc.configurable)
    `
  },
  {
    code:`
      ${shareCode2}
      log(x["p"])
    `
  },
  {
    code:`
      ${shareCode2}
      log(x["p"].value)
    `
  },
  {
    code:`
      var oy = {"p":3};
      Object.defineProperty(oy, "p", { writable: false} );
      oy["p"] = 4;
      log(oy["p"])
    `
  },
  {
    code:`
      ${shareCode3}
      log(ox["p"]);
    `
  },
  {
    code:`
      ${shareCode3}
      log( Object.getOwnPropertyNames(ox) );
    `
  },
  {
    code:`
      ${shareCode3}
      log(Object.getOwnPropertyDescriptor(ox, "p").writable);
    `
  },
  {
    code:`
      ${shareCode3}
      log(Object.getOwnPropertyDescriptor(ox, "p").value);
    `
  },
  {
    code:`
      var yy = {};
      Object.defineProperties(
        yy,
        {
            x1:{ value : 1, writable: true, enumerable: true, configurable: true},
            x2:{ value : 2, writable: true, enumerable: true, configurable: true}
        }
      );
      log( Object.keys(yy)  )
    `
  },
  {
    code:`
      var x = {"p":4};
      log( x.propertyIsEnumerable("p") );
    `
  }
]
export default {
  label:"Writable, Enumerable, Configurable",
  link:"/property_attributes",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_property_attributes.html"
}
