const questions = [
    {
      code:`
        log(typeof 3)
      `
    },
    {
      code:`
        log(typeof 3.5)
      `
    },
    {
      code:`
        log(typeof NaN)
      `
    },
    {
      code:`
        log(typeof Infinity)
      `
    },
    {
      code:`
        log(typeof undefined)
      `
    },
    {
      code:`
        log(typeof null)
      `
    },

    {
      code:`
        log(typeof {})
      `
    },
    {
      code:`
        log(typeof [3,4])
      `
    },
    {
      code:`
        log(typeof /\d+/)
      `
    },
    {
      code:`
        log( typeof (new Date()) )
      `
    },
    {
      code:`
        log(typeof Math)
      `
    },
    {
      code:`
        log( typeof (function () {return 3;}) )
      `
    },
    {
      code:`
        var aa = [3,4];
        aa["p1"] = 7;
        log(aa.p1);
      `
    },
    {
      code:`
        var aa = [3,4];
        aa["p1"] = 7;
        log( Object.keys(aa) );
      `
    },
    {
      code:`
        var ff = function () {return 4;};
        ff["p1"] = 1;
        log(ff["p1"]);
      `
    },
    {
      code:`
        var dd = new Date();
        dd["p1"] = 7;
        log(dd.p1)
      `
    },
    {
      code:`
        var rx = /\d+/;
        log(rx.test("123"));
      `
    },
    {
      code:`
        var rx = /\d+/;
        rx["p1"] = 7;
        log(rx.p1);
      `
    },
    {
      code:`
        var num = 5
        num["p1"] = 7
        log(num)
      `
    },
    {
      code:`
        var num = 5
        num["p1"] = 7
        log(num["p1"])
      `
    }

]
export default {
  label:"What's Object?",
  link:"/whats_object",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_whats_object.html"
}
