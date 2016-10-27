const shareCode = `
  var o1 = {"p":1};
  var o2 = Object.create(o1);
`

const questions = [
  {
    code: `
      ${shareCode}

      log(o1.hasOwnProperty("p"));
    `
  },
  {
    code: `
      ${shareCode}

      log(o2.hasOwnProperty("p"));
    `
  },
  {
    code: `
      ${shareCode}

      log(o2.hasOwnProperty("yyy"));
    `
  },
  {
    code: `
      ${shareCode}

      o2["p2"] = 2;

      log("p1" in o2)
    `
  },
  {
    code: `
      ${shareCode}

      o2["p2"] = 2;

      log("p2" in o2)
    `
  },
  {
    code: `
      ${shareCode}

      o2["p2"] = 2;

      log("yyyyy" in o1)
    `
  },
  {
    code: `
      ${shareCode}

      o2["p2"] = 2;
      
      log("yyyyy" in o2)
    `
  },
]
export default {
  label:"Check Property Existence",
  link:"/property_existence",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_property_existence.html"
}
