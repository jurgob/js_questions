const questions = [
  {
    code:`
      var c = {"a":3};
      var d = {"a":3};

      log( c === d );
    `
  },
  {
    code:`
      var c = {"a":3};
      var d = {"a":3};

      log( c.a === d.a );
    `
  },
  {
    code:`
      var c = {"a":3};
      var d = c;

      log( c === d );
    `
  },
  {
    code:`
      var x = {"a":1, "b":2};
      var y = {"b":2, "a":1};
      log( JSON.stringify(x) === JSON.stringify(y) )
    `
  },
  {
    code:`
      var x = {"a":1, "b":2};
      var y = {"a":1, "b":2};
      log( JSON.stringify(x) === JSON.stringify(y) )
    `
  }

]
export default {
  label:"Equality Test of Objects",
  link:"/_comparison_equality_test_objects",
  questions,
  tutorial_link:"http://xahlee.info/js/js_comparison_equality_test_objects.html"
}
