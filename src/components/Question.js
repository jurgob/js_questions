import React from 'react'
import Code from './Code'

function _eval(code){
  let logResponse ="";
  const log = function(l){ logResponse=l }
  eval(code)

  if(logResponse === undefined)
    logResponse = "undefined"
  else
    logResponse = JSON.stringify(logResponse)

  return logResponse;
}

const Question = ({code, onCheckResponse, response, text}) => {
  if(response !== undefined )
    response +=""

  const hasResponse = typeof response === 'string' && response !== ''
  const userResponse = response +=""

  const solution = _eval(code)

  const responseIsRight =
    hasResponse &&
    userResponse === solution

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
