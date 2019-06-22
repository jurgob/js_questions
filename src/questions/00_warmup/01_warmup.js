const warmUp2ShareCode = `
  var obj1 = {}
  var count = {'num':0  }

  var obj1 = {val: count}
  var obj4 = {val: count}

  var obj2 = obj1
  var obj3 = obj1
`

const questions = [
  {
    text:"1) some integer assignment",
    code :"var a = 5; var b = a; b = 6; log(a)//?"
  },
  {
    text: "2a) some object assign",
    code: `
      ${warmUp2ShareCode}
      log(obj1 === obj2)
    `
  },
  {
    text: "2b) some object assign, another question",
    code: `
      ${warmUp2ShareCode}
      log(obj1 === obj4)
    `
  },
  {
    text: "2c) some object assign, another question",
    code: `
      ${warmUp2ShareCode}
      var obj5 = JSON.parse(JSON.stringify(obj1))
      log(obj5 === obj1)
    `
  },
  {
    text: "3a) some object property assign",
    code: `
      ${warmUp2ShareCode}
      log(obj1.val.num)
    `
  },
  {
    text: "3b) some object property assign",
    code: `
      ${warmUp2ShareCode}
      log(obj2.val.num)
    `
  },
  {
    text: "3c) some object property assign",
    code: `
      ${warmUp2ShareCode}
      obj1.val.num = 1;
      log(obj1.val.num)
    `
  },
  {
    text: "3d) some object property assign",
    code: `
      ${warmUp2ShareCode}
      obj1.val.num = 1;
      log(obj2.val.num)
    `
  },
  {
    text: "4a) some object new property assign",
    code: `
      ${warmUp2ShareCode}
      obj1.myProp = true;
      log(obj2.myProp)
    `
  }
]

export default {
  label:"Some Warm Up",
  link:"/warmup",
  questions
}
