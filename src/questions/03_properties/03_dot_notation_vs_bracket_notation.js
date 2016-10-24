const questions = [
  {
    code:`
      var x = {"a b": "val"};
      var res;
      res = x["a b"]
      log(res)
    `
  },
  {
    code:`
      var x = {"a b": "val"};
      var res;
      res = x[a b]
      log(res)
    `
  },
  {
    code:`
      var x = {"a b": "val"};
      var res;
      res = x."a b"
      log(res)
    `
  },
  {
    code: `
      var x = {"3":8};
      log(x["3"])
    `
  },
  {
    code: `
      var x = {"3":8};
      log(x[3])
    `
  },
  {
    code: `
      var x = {"3":8};
      log(x.3)
    `
  }

]
export default {
  label:"Dot vs Bracket Notation",
  link:"/dot_notation_vs_bracket_notation",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_dot_notation_vs_bracket_notation.html"
}
