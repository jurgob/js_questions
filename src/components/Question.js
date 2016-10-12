import React from 'react'
import Code from './Code'

function formatEval(code){
  if(code === undefined)
    code = "undefined"
  else
    code = JSON.stringify(code)

  return code
}

function safeEval(code){
  try{
    return eval(code)
  }catch(e){
    return e.message
  }
}

function _eval(code){
  let logResponse ="";
  const log = function(l){ logResponse=l }
  _eval.log = log;
  eval(code)

  return formatEval(logResponse);
}

const Question = ({code, onCheckResponse, response, text}) => {

  const hasResponse = typeof response === 'string' && response !== ''

  const solution = _eval(code)


  const responseIsRight =
    hasResponse &&
    solution === formatEval(safeEval(response))

  return (
    <div>
      <div>
        <h3>{text}</h3>
        <Code>
          {code}
        </Code>
      </div>
      {!responseIsRight && (
        <div style={{border: "1px solid black"}}>
          <input type="text" onChange={(e) => onCheckResponse(e.target.value)}  />
        </div>
      )}
      {responseIsRight && (
        <div style={{color:"green"}}>
          {response} is Right!
        </div>
      )}
      {hasResponse && !responseIsRight && (
        <div style={{color:"red"}}>
          {response} is Wrong!
        </div>
      )}
    </div>
  )

}



export default Question;
