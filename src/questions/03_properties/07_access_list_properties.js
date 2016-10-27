const questions = [
  {
    code:`
      var o1 = {"a":3};

      var o2 = Object.create(o1);
      o2["b"] = 4;

      var res = ""
      for (var pp in o2) {
        res+= pp + o2[pp];
      }
      log(res)
    `
  },
  {
    code:`
      var obj = {"a":3, "b":4};
      var res ="";

      Object.keys(obj).forEach(
        function (k) {
            res += k + obj[k];
        }
      );

      log(res)
    `
  }
]
export default {
  label:"Access/List Properties",
  link:"/property_and_prototype_chain",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_property_and_prototype_chain.html"
}
