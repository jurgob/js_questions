const questions = [
  {
    code:`
      log( Boolean(0) );
    `
  },
  {
    code:`
      var xx = new Boolean(0);
      log(
        xx.valueOf()
      );
    `
  }

]
export default {
  label:"Boolean() Constructor Object",
  link:"/boolean_object",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_Boolean_object.html"
}
