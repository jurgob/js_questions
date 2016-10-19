import vm from 'vm-shim';

if (!Array.prototype.contains) {
    Array.prototype.contains = function(s) {
        return this.indexOf(s) > -1
    }
}

export function  arrayDiff(current, compare) {
    return current.filter((elem) =>  !compare.contains(elem) )
}


export function formatEval(code){
  if(code === undefined)
    code = "undefined"
  else
    code = JSON.stringify(code)

  return code
}

// const geval = false || eval

function evaluateCode(code){
  let logResponse ="";
  const log = function(l){ logResponse=l }

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

  eval(code)

  return formatEval(logResponse);
}

export default evaluateCode
