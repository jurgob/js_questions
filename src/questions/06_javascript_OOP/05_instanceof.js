const questions = [
  {
    code:`
      function FF () {
        this.p = 3;
      };

      var f1 = new FF();
      log( f1 instanceof FF);
    `
  },
  {
    code:`
      function ff () {};
      var x = {};

      ff.prototype = Object.prototype;

      log( x instanceof ff)
    `
  },
  {
    code:`
      function ff () {};
      var x = {};

      ff.prototype = Object.prototype;

      log( ff.prototype.isPrototypeOf(x) )
    `
  },
  {
    code:`
      function FF () {return {};}; // returns a object
      var f1 = new FF();

      log( f1 instanceof FF)
    `
  },
  {
    code:`
      function FF () {return {};}; // returns a object
      var f1 = new FF();

      log( FF.prototype.isPrototypeOf(f1) )
    `
  },
  {
    code:`
      function FF () {
        this.p = 3;
      };
      var f1 = new FF();
      FF.prototype = [];

      log( f1 instanceof FF);
    `
  },
  {
    code:`
      function FF () {
        this.p = 3;
      };
      var f1 = new FF();
      FF.prototype = [];

      log( FF.prototype.isPrototypeOf(f1) );
    `
  }
]
export default {
  label:`Operator "instanceof"`,
  link:"/instanceof",
  questions,
  tutorial_link:"http://xahlee.info/js/javascript_instanceof.html"
}
