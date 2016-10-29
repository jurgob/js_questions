const questions = [
  {
    code:`
      var x = new Array
      log(typeof x)
    `
  },
  {
    code:`
      var x = new Array()
      log(typeof x)
    `
  }
]
export default {
  label:"What's Constructor?",
  link:"/whats_constructor",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_whats_constructor.html"
}
