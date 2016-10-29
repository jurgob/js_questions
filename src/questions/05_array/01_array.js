const questions = [
  {
    code:`
      var aa = [3,4];
      aa["xx"] = 7;
      log(aa["xx"]);
    `
  },
  {
    code:`
      var aa = [3,4];
      aa["xx"] = 7;
      log(aa["xx"].length);
    `
  },
  {
    code:`
      var aa = [3,4];
      log(Object.isExtensible(aa));
    `
  },
  {
    code:`
      var ee = ["b", "c"];
      log(Object.getOwnPropertyNames(ee));
    `
  },
  {
    code:`
      var rr = ["b", "c"];
      log(Object.getOwnPropertyDescriptor(rr, "1").value);
    `
  },
  {
    code:`
      var arr = [3];
      log(arr[200] === undefined);
    `
  },
  {
    code:`
      var obj = {"a":1};
      console.log(obj["h"] === undefined);
    `
  },
  {
    code:`
      log(
        Array.isArray([])
      );
    `
  },
  {
    code:`
      log(
        Array.isArray({})
      );
    `
  },
  {
    code:`
      var aa = ["a", "b"];
      log(aa.length)
    `
  },
  {
    code:`
      var aa = ["a", "b"];
      log(Object.getOwnPropertyNames(aa).length)
    `
  },
  {
    code:`
      var aa = ["a", "b"];
      aa.length = 3;
      log(aa.length)
    `
  },
  {
    code:`
      var aa = ["a", "b"];
      aa.length = 3;
      log(Object.getOwnPropertyNames(aa).length)
    `
  },
  {
    code:`
      var aa = ["a", "b", "c"];
      log(aa.length);
    `
  },
  {
    code:`
      var aa = ["a", "b", "c"];
      aa.length = 1;
      log(aa.length);
    `
  },
  {
    code:`
      var aa = ["a", "b", "c"];
      aa.length = 1;
      log(aa[1]);
    `
  },
  {
    code:`
      var aa = ["a", "b", "c"];
      aa.length = 1;
      log( Object.getOwnPropertyNames(aa) );
    `
  },
  {
    code:`
      var hh = ["a"];
      hh[1] = "b";
      hh[4294967296] = "c";
      log(hh.length)
    `
  },
  {
    code:`
      var hh = ["a"];
      hh[1] = "b";
      hh[4294967296] = "c";
      log(Object.getOwnPropertyNames(hh).length)
    `
  }
]
export default {
  label:"Array",
  link:"/array",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_array.html"
}
