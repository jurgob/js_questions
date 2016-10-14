
export default {
  label:"How to responde",
  link:"/how_to_responde",
  questions:[
    {
      code :"log(5)  // this is a  5 without the quote"
    },
    {
      code :'log("5")  // this is a  "5" without the double quote '
    },
    {
      code :'log(undefined)  // this is undefined without the double quote '
    },
    {
      code :'log(typeof undefined)  // this is "undefined" string with the double quote '
    },
    {
      code :'log([1,"2"])  // this is an array, witn an integer and a string  so write [1,"2"]'
    },
    {
      code :`log(JSON.stringify([1,"2"]))
        // this is a string of the previous array,
        //so write '[1,"2"]'
      `
    },
  ]
}
