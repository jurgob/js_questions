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

// const geval = false || eval

function evaluateCode(code){
  let logResponse ="";
  const log = function(l){ logResponse=l }
  evaluateCode.log = log;
  /* attemp A
    const context = {
      log
    }
    cons sCode = code // replace all "function a(){}"" with "a=a.bind(this);function a(){} "
    new Function("window", "with(window){" + sCode + "}")({});
  */

  /* attemp VM

    const context = {
    log
    }
    vm.runInNewContext(code, context)
    */
  try {
    eval(code)
  } catch(e) {
    return "err"
  }


  return formatEval(logResponse);
}

export default evaluateCode
