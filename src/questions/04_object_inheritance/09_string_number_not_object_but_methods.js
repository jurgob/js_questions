const questions = [
  {
    code:`
      log(typeof "abc")
    `
  },
  {
    code:`
      log(typeof new String("abc"))
    `
  }
]
export default {
  label:"Primitive Types Object Wrapper",
  link:"/string_number_not_object_but_methods",
  questions,
  tutorial_link:"http://xahlee.info/js/js_string_number_not_object_but_methods.html"
}
