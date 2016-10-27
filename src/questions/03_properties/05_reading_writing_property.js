const questions = [
  {
    code: `
      var o1 = {"p1":1};
      var o2 = Object.create(o1);
      log(o2["p1"]);
    `
  },
  {
    code: `
      var o1 = {};
      console.log(typeof o1["toString"]);
    `
  },
  {
    code: `
      log({a:2}.a)
    `
  },
  {
    code: `
      log({a:2}.b)
    `
  },
  {
    code: `
      var bb = {"p1":1};
      log("toString" in bb);
    `
  },
  {
    code: `
      var bb = {"p1":1};
      log( typeof bb["toString"]);
    `
  },
  {
    code:`
      var bb = {"p1":1};
      log(bb.hasOwnProperty("toString"));
    `
  },
  {
    code:`
      var bb = {"p1":1};
      bb["toString"] = 2;
      log( typeof bb["toString"] );
    `
  },
  {
    code:`
      var bb = {"p1":1};
      bb["toString"] = 2;
      log( bb.hasOwnProperty("toString") );
    `
  }
]
export default {
  label:"Read/Write to Property",
  link:"/reading_writing_property",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_reading_writing_property.html"
}
