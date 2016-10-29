const shareCode = `
  var dad = {"a":3};
  var F1 = function (x) {this.y = x;};
  F1.prototype = dad;
  var F2 = function (x) {
    return Object.create(
        dad,
        {"y":{value: x,writable: true, enumerable: true, configurable: true}});
  };

  var o1 = new F1(4);
  var o2 = F2(4);
`

const questions = [
  {
    code: `
      ${shareCode}
      log(
        Object.getPrototypeOf(o1) ===
        Object.getPrototypeOf(o2)
      )

    `,
    solution:true
  },
  {
    code: `
      ${shareCode}
      log(
        JSON.stringify(Object.getOwnPropertyDescriptor(o1,"y")) ===
        JSON.stringify(Object.getOwnPropertyDescriptor(o2,"y"))
      )

    `,
    solution:true
  },
]
export default {
  label:`Object.create as Constructor`,
  link:"/object_create_emulating_constructor",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_object_create_emulating_constructor.html"
}
