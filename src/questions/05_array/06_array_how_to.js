const shareCode = `
  var mm = [8];
  var aa = [3,mm];
  var bb = aa.slice();

  mm[0] = 4;
`

const questions = [
  {
    code:`
      ${shareCode}
      log(aa[1][0])
    `
  },
  {
    code:`
      ${shareCode}
      log(bb[1][0])
    `
  },
  {
    code:`
      log(
        [3,4,5].join("-")
      );
    `
  },
  {
    code:`
      var aa = [1,[9,[3,7]],4];
      log(
        Array.prototype.concat.apply([],aa)
      );
    `
  },
  {
    code:`
      var obj = {"a": 1, "b": 8, "c": 3, "d": 7};
      var keys = Object.keys(obj);

      log(keys);
    `
  },
  {
    code:`
      var obj = {"a": 1, "b": 8, "c": 3, "d": 7};

      var values = Object.keys(obj).map(
        function (k) {return obj[k];}
      );

      log(values);
    `
  }
]
export default {
  label:"Array How-To",
  link:"/array_how_to",
  questions,
  tutorial_link:"http://xahlee.info/js/js_array_how_to.html"
}
