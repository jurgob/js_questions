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
  const responseFieldName ="response_"+id;

  const responseIsRight =
    hasResponse &&
    solution === formatEval(safeEval(response))

  const styleVars = {
    h: 26,
    get height() { return this.h+"px"  }
  }

  return (
    <div className="Question">
      <h3 className="Question-title" >{text}</h3>
      <div className="Question-body" >
        <div className="Question-code-container" >
          {/* solution: {solution} */}
          <Code>
            {code}
          </Code>
        </div>
      </div>
      {!responseIsRight && (
        <div className="FormResponse-container" >
          <form
            onSubmit={(e)=>{
              e.preventDefault();
              onCheckResponse(id, e.target[responseFieldName].value)
            }}
        >
            <input
              className="FormResponse-input-text"
              key={responseFieldName}
              type="text"
              name={responseFieldName}
              autoCorrect="off" autoCapitalize="off" autoComplete="off"
              spellCheck={false}
              placeholder={response ? response :""}
            />

            <input
              className="FormResponse-input-submit"
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
