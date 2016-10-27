const shareCode = `
    var obj = {
      p1: 1,
      get p2() { return 2+2}
    };
`
const shareCode2 = `
  var obj = {
    p1: 1,
    p2: 2,
    set p3(xx) {
        this.p1 = xx + 1;
        return 7;
    },
    p4: 4
  };
`

const questions = [
  {
    code:`
      ${shareCode}
      log(obj.p1)
    `
  },
  {
    code:`
      ${shareCode}
      log(typeof obj.p1)
    `
  },
  {
    code:`
      ${shareCode}
      log(obj.p2)
    `
  },
  {
    code:`
      ${shareCode}
      log(typeof obj.p2)
    `
  },
  {
    code:`
      ${shareCode2}
      log(obj["p1"]);
    `
  },
  {
    code:`
      ${shareCode2}
      obj["p3"] = 36;
      log(obj["p1"]);
    `
  },
  {
    code:`
      ${shareCode2}
      obj["p3"] = 36;
      log(obj["p3"]);
    `
  },
  {
    code: `
      var obj = {
        p1: 1,
        get "x y"() {
            return this["p1"] + 1;
        }
      };
      log(obj["x y"]);
    `
  }

]
export default {
  label:"Getter/Setter Property",
  link:"/getter_and_setter_properties",
  questions,
  tutorial_link:"http://xahlee.info/js/js_getter_and_setter_properties.html"
}
