const questions = [
  {
    code:`
       Object.prototype.toString.call({})
    `
  },
  {
    code:`
       Object.prototype.toString.call(/./)
    `
  },
  {
    code:`
       Object.prototype.toString.call([])
    `
  },
  {
    code:`
       Object.prototype.toString.call(1)
    `
  },
  {
    code:`
       Object.prototype.toString.call("")
    `
  },
  {
    code:`
       Object.prototype.toString.call(true)
    `
  },
]
export default {
  label:"[[class]] (subtype of object)",
  link:"/class_find_object_type",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_class_find_object_type.html"
}
