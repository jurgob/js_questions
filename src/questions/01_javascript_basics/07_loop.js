const questions = [
  {
    code: `
      var res = ""
      for (var i=0; i <= 5; i++) {
        if (i===3) {continue;}
        res += i
      }
      log(res)
    `
  }
]

export default {
  label:"Loop",
  link:"/loop",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_iteration.html"
}
