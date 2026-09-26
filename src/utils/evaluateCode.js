// import vm from 'vm-shim';
/* eslint no-eval: 0 */

export function safeEval(code){
  try{
    return eval(code)
  }catch(e){
    return e.message
  }
}

export function formatEval(code){
  if(code === "err")
    code = "err"
  else if(code === undefined)
    code = "undefined"
  else
    code = JSON.stringify(code)

  return code
}

export function arrayDiff(a, b){
  return a.filter(item => b.indexOf(item) === -1)
}

// Indirect eval runs the code as a plain (non-strict) global script, like a
// browser <script> tag. Direct eval here would inherit this module's strict mode.
const globalEval = eval

function evaluateCode(code){
  let logResponse ="";
  const globalsBefore = Object.keys(window)
  window.log = function(l){ logResponse=l }
  try {
    globalEval(code)
  } catch(e) {
    return "err"
  } finally {
    // remove globals created by the code (and log) so questions don't leak into each other
    arrayDiff(Object.keys(window), globalsBefore).forEach(key => {
      try { delete window[key] } catch(e) {}
    })
  }

  return formatEval(logResponse);
}

export default evaluateCode
