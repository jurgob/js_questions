const questions = [
  {
    code:`
      var x = 1;

      switch(x) {
        case "w":
            x += "1";
        case 32:
            x += "2";
        case 40:
            x += "7";
        default:
            x += "3";
      }

      log(x)
    `
  },
  {
    code:`
      var x = 1;
      switch(x) {
        case "w":
            x += "1";
        case "1":
            x += "2";
        case 40:
            x += "7";
        default:
            x += "3";
      }

      log(x)
    `
  },
  {
    code:`
      var x = 1;
      switch(x) {
        case 1:
            x += "1";
        case "1":
            x += "2";
        case 2:
            x += "7";
        default:
            x += "3";
      }
      log(x)
    `
  }
]

export default {
  label:"Branch Control",
  link:"/branch_control",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_branch_control.html"
}
