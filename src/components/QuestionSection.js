import React, {Component} from 'react';
import Question from './Question';
import { Link } from 'react-router'
import LinkButton from './LinkButton'

class QuestionSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions:this.props.questions
    }
  }

  updateQuestionResponse = (idx, response) => {//TODO: use immutability helpers

    let _newQuestions = [...this.state.questions];
    _newQuestions[idx].response = response;
    this.setState({questions: _newQuestions})
  }

  render() {
    const {questions} = this.state;
    const {title, introduction, nextLink} = this.props;

    return (
        <section style={{textAlign:"left"}} >
          <h1>{title}</h1>
          <div>{introduction}</div>
          <div  className="questions"  >
            {questions.map( (question, idx) => (
              <div key={idx} style={{borderBottom: "1px solid #ddd", paddingBottom:"10px"}} >
                <Question
                  text={question.text}
                  code={question.code}
                  onCheckResponse={(response) => this.updateQuestionResponse(idx, response)}
                  response={question.response}
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

export default QuestionSection
