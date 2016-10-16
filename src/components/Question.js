import React, {PropTypes} from 'react'
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

const Question = ({id, code, text, onCheckResponse, response}) => {

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
        <div style={{border: "1px solid #ccc"}}>
          <form
            onSubmit={(e)=>{
              e.preventDefault();
              onCheckResponse(id, e.target.response.value)
            }}
        >

            <input
              type="text"
              name="response"
              placeholder={response ? response :""}
              style={{
                width:"98%",
                marginRight:"-5px",
                border:"none",
                fontSize:"14px",
                height:"20px",
                display:"inline-block"
              }}
            />

            <input
              style={{
                position:"absolute",
                right:"5px",
                backgroundColor:"black",
                color:"white",
                border:"none",
                margin:"0",
                fontSize:"16px",
                height:"22px",
              }}
              type="submit"
              value="Check"
            />
          </form>
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

const {string,func} = PropTypes;
Question.propTypes = {
  id:string.isRequired,
  code:string.isRequired,
  text:string.isRequired,
  onCheckResponse:func.isRequired,
  response:string
}

export default Question;
