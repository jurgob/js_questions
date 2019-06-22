import React from 'react';
import PropTypes from 'prop-types';
import Code from './Code'
import {formatEval, safeEval} from '../utils/evaluateCode'

const Question = ({id, code, text, onCheckResponse, response, solution}) => {

  const hasResponse = typeof response === 'string' && response !== ''
  const responseFieldName ="response_"+id;

  const responseIsRight =
    hasResponse &&
    solution === formatEval(safeEval(response))


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
