import React, {Component,PropTypes} from 'react';
import Question from './Question';
import LinkButton from './LinkButton'

class QuestionSection extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     questions:this.props.questions
  //   }
  // }
  //
  // updateQuestionResponse = (idx, response) => {//TODO: use immutability helpers
  //
  //   let _newQuestions = [...this.state.questions];
  //   _newQuestions[idx].response = response;
  //   this.setState({questions: _newQuestions})
  // }

  render() {
    // const {questions} = this.state;
    const {title, introduction, nextLink,questions,onCheckResponse} = this.props;

    return (
        <section style={{textAlign:"left"}} >
          <h1>{title}</h1>
          <div>{introduction}</div>
          <div  className="questions"  >
            {!questions.length && (
              <div style={{padding:"15px 0"}} >
                <div><b>No questions for this section!</b></div>
                <span>Go to the next one</span>
              </div>
            ) }
            {questions.map( (question, idx) => (
              <div key={idx} style={{borderBottom: "1px solid #ddd", paddingBottom:"10px"}} >
                <Question
                  text={(idx+1)+")"}
                  code={question.code}
                  onCheckResponse={(id, response) => onCheckResponse(id, response)}
                  response={question.response}
                  id={question.id}
                />
              </div>
            ))}
          </div>

            {nextLink && (
              <div >
                <LinkButton to={nextLink}>Next Section > </LinkButton>
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
