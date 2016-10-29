const questions = [
  {
    code:`
      var obj1 = {a:1}
      var obj2 = obj1;
      obj2.a =2;
      log(obj1.a)
    `
  },
  {
    code:`
      var obj1 = {a:1}
      var obj2 = JSON.parse(JSON.stringify(obj1));
      obj2.a =2;
      log(obj1.a)
    `
  },
]
export default {
  label:"Clone Object",
  link:"/clone_object",
  questions,
  tutorial_link:"http://xahlee.info/js/js_clone_object.html"
}
