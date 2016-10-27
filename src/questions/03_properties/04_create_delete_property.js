const questions = [
  {
    code: `
      var obj = {"p1":1, "p2":2};
      obj["p3"] = 3;
      log(obj["p3"])
    `
  },
  {
    code: `
      var cc = {};
      Object.defineProperty(cc, "pp", { value : 3});
      log(cc["pp"])
    `
  },
  {
    code:`
      var oo = {"p1":1, "p2":2};
      delete oo["p1"]
      log(oo["p1"])
    `
  }
]
export default {
  label:"Create/Delete Property",
  link:"/create_delete_property",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_create_delete_property.html"
}
