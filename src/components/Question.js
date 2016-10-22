import React, {PropTypes} from 'react'
import Code from './Code'
import {formatEval, safeEval} from '../utils/evaluateCode'

// function formatEval(code){
//   if(code === undefined)
//     code = "undefined"
//   else
//     code = JSON.stringify(code)
//
//   return code
// }
//
// function safeEval(code){
//   try{
//     return eval(code)
//   }catch(e){
//     return e.message
//   }
// }
//
// function _eval(code){
  // let logResponse ="";
  // const log = function(l){ logResponse=l }
  // _eval.log = log;
  // eval(code)
  //
  // return formatEval(logResponse);
// }

const Question = ({id, code, text, onCheckResponse, response, solution}) => {

  const hasResponse = typeof response === 'string' && response !== ''

  // const solution = _eval(code)


  const responseIsRight =
    hasResponse &&
    solution === formatEval(safeEval(response))

  const styleVars = {
    h: 26,
    get height() { return this.h+"px"  }
  }

  return (
    <div>
      <div>
        <h3>{text}</h3>
        <div style={{paddingBottom:"15px"}} >
          {/* solution: {solution} */}
          <Code>
            {code}
          </Code>
        </div>
      </div>
      {!responseIsRight && (
        <div style={{border: "1px solid #ccc", position:"relative"}}>
          <form
            onSubmit={(e)=>{
              e.preventDefault();
              onCheckResponse(id, e.target.response.value)
            }}
        >
            <input
              type="text"
              name="response"
              autoCorrect="off" autoCapitalize="none"
              placeholder={response ? response :""}
              style={{
                width:"98%",
                "WebkitAppearance": "none",
                marginRight:"-5px",
                border:"none",
                fontSize:"14px",
                lineHeigth:styleVars.height,
                height:styleVars.height,
                display:"block",
                padding:"0px"
              }}
            />

            <input
              style={{
                position:"absolute",
                top:"0px",
                right:"0px",
                fontSize:"16px",
                height:styleVars.height,
                margin:"0",
                display:"block",
                "WebkitAppearance": "none",
                borderRadius:"0",
                lineHeigth:styleVars.height,
                backgroundColor:"black",
                color:"white",
                border:"none",

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
