const shareCode = `
  var cc = [];
  cc[2] = "b";
`
const questions = [
  {
    code:`
      var rr = ["a", "b"];
      delete rr[1];
      log(rr.length)
    `
  },
  {
    code:`
      var rr = ["a", "b"];
      delete rr[1];
      log(Object.keys(rr))
    `
  },
  {
    code:`
      ${shareCode}
      log(cc[0])
    `
  },
  {
    code:`
      ${shareCode}
      log(cc[2])
    `
  },
  {
    code:`
      ${shareCode}
      log(cc.length)
    `
  }


]
export default {
  label:"Sparse Array",
  link:"/sparse_array",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_sparse_array.html"
}
