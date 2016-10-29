const shareCode = `
  function ff(x,y) {
    return arguments
  }
`

const questions = [
  {
    code:`
      var a1 = {0:"a", 1:"b" , length:2};
      a1[2] = 99;
      log(a1.length)
    `
  },
  {
    code:`
      var a2 = ["a", "b"];
      a2[2] = 99;
      log(a2.length)
    `
  },
  {
    code:`
      log(
        ff("a", "b").length
      )
    `
  },
  {
    code:`
      log(
        ff("a", "b")[0]
      )
    `
  },
  {
    code:`
      log(
        ff("a", "b")[1]
      )
    `
  },
  {
    code:`
      log(
        Array.isArray(ff("a", "b"))
      )
    `
  },
  {
    code:`
      log(
        Object.getOwnPropertyNames( ff("a", "b")).length
      )
    `
  },
  {
    code:`
      log(
        Object.getOwnPropertyNames( ff("a", "b"))[2]
      )
    `
  },
  {
    code:`
      log(
        Object.getOwnPropertyNames( ff("a", "b"))[3]
      )
    `
  },
]
export default {
  label:"Array-Like Object",
  link:"/array_like_object",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_array-like_object.html"
}
