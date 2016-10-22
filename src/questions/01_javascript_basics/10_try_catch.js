const questions = [
  {
    code: `
      var res ="";
      try {
        res+="a";
      } catch(e) {
        res+="b";
      }
      finally {
        res+="c";
      }
      log(res);
    `
  },
  {
    code: `
      var res ="";
      try {
        res+="a";
        throw 5
      } catch(e) {
        res+="b";
      }
      finally {
        res+="c";
      }
      log(res)
    `
  },
  {
    code: `
      try {
        throw new Error("xyz is wrong.");
      } catch(e) {
        log( typeof(e)  )
      }
    `
  },
  {
    code: `
      try {
        throw 5;
      } catch(e) {
        log( typeof(e)  )
      }
    `
  }
]

export default {
  label:"Try Catch Throw Finally",
  link:"/try_catch_throw_finally",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_try_catch_throw_finally.html"
}
