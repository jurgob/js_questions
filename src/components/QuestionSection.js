import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import LinkButton from './LinkButton'

class QuestionSection extends Component {
  render() {
    const {title, introduction, nextLink,questions,onCheckResponse} = this.props;

    return (
        <section className="QuestionSection">
          <div className="QuestionSection-header" >
            <h1 className="QuestionSection-header-title" >{title}</h1>
            <div className="QuestionSection-header-introduction" >{introduction}</div>
          </div>
          <div  className="QuestionsList"  >
            {!questions.length && (
              <div style={{padding:"15px 0"}} >
                <div><b>No questions for this section!</b></div>
                <span>Go to the next one</span>
              </div>
            ) }
            {questions.map( (question, idx) => (
              <div className="QuestionList-item"  key={idx} >
                {/* solution: {question.response} */}
                <Question
                  text={`${idx+1}`}
                  code={question.code}
                  onCheckResponse={(id, response) => onCheckResponse(id, response)}
                  response={question.response}
                  id={question.id}
                  solution={question.solution}
                />
              </div>
            ))}
          </div>

            {nextLink && (
              <div >
                <LinkButton to={"/sections"+nextLink}>Next Section > </LinkButton>
              </div>
            )}


        </section>
    );
  }
}
const {string,func,array} = PropTypes;
QuestionSection.propTypes ={
  title:string.isRequired,
  // introduction: oneTypeOf(string, element).isRequired,
  nextLink: string,
  questions:array.isRequired,
  onCheckResponse:func.isRequired,
}


export default QuestionSection
