const questions = [
  {
    code:`
      var o1 = {};
      var o2 = Object.create(o1);

      log(
        Object.getPrototypeOf(o2) === o1
      );
    `
  },
  {
    code:`
      var o1 = {"a":3};
      var FF = function () {};
      FF["prototype"] = o1;
      var o2 = new FF();
      log( Object.getPrototypeOf(o2) === o1 );
    `
  },
]
export default {
  label:"Create Object with Parent X",
  link:"/create_object_with_specified_prototype",
  questions,
  tutorial_link:"http://xahlee.info/js/js_create_object_with_specified_prototype.html"
}
