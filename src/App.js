import React from 'react';
import './App.css';
import Sections from './components/Sections'
import ImportPanel from './components/ImportPanel'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import evaluateCode from './utils/evaluateCode'

import sha1 from 'sha1';
import sectionsList from './sectionsList'
const localStorage = window.localStorage


// evaluateCode(q.code)
const prepareQuestions = (questions, responses, key) => questions.map((q,idx)=> {
  const id = sha1(q.code);
  let solution = q.solution
  try{
    if(typeof solution !== 'string' )
      solution = evaluateCode(q.code)
  }catch(e){

    console.warn('eval rise an error! code: ', q.code);
    console.warn('error: ', e);
  }

  return {
    ...q,
    id,
    response: responses[id],
    solution: solution,
  }

})

const flatSection = (sectionsList,responses) => sectionsList.map((s, idx) => ({
  ...s,
  subsections: s.subsections.map((sub ,sidx) => ({
    ...sub,
    questions: prepareQuestions(sub.questions, responses, idx+'__'+sidx)
  }) )
}))

function getQuestionsTot(sectionsList){
  let questionsTot = 0
  sectionsList.forEach( s => s.subsections.forEach(sub => questionsTot += sub.questions.length   ) )
  return questionsTot;
}


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sectionsList:sectionsList,
      responses:{}
    }
  }

  componentDidMount(){
    const responses = localStorage.getItem("responses")
    // const lastAccessQuestionsTot = JSON.parse(localStorage.getItem("questionsTot"))
    const questionsTot = getQuestionsTot(sectionsList);
    // localStorage.setItem("questionsTot",JSON.stringify(questionsTot))
    if(responses) {
      this.setState({
        responses:JSON.parse(responses)
      })
    }
  }

  setResponse = (id, response) => {
    const responses = {
      ...this.state.responses,
      [id]:response
    }
    this.setResponses(responses)
  }

  setResponses = (responses) => {
    console.log("setResponses", responses)
    this.setState({
      responses: responses
    })
    localStorage.setItem("responses",JSON.stringify(responses))
  }

  render(){
    const {sectionsList,responses} = this.state;

    const sections = flatSection(sectionsList, responses)

    const responsesLength = Object.keys(responses).length


    const questionsTot = getQuestionsTot(sectionsList);
    const exportUrl = `${window.location.origin}/import?state=${encodeURI(JSON.stringify({responses}))}`
    return (
      <div className="App" >
        <div className="App-header">
          <h2 className="App-header-title">Javascript Questions</h2>
          <HeaderLine>
            This is a little test about your javascript ability. Write down in the inputs what the <code>log()</code> function will print
          </HeaderLine>
          <HeaderLine>
            <b>note:</b> if the result is a string , wrap your response with double quote: <code>false</code> will be a bolean, <code>"false"</code> will be a string,
            write <code>"err"</code> if the code raise an exception or there's a syntax error.
          </HeaderLine>
          <HeaderLine>
            The structure of the tests follows this tutorial: <a style={{color:"white"}}  href="http://xahlee.info/js/js.html">xahlee.info/js</a>
          </HeaderLine>
          <HeaderLine>
            On mobile devices It works <b>offline</b> if you Add the website to your home.
          </HeaderLine>
          <HeaderLine>
            You can get export your responses clicking  <CopyToClipboard text={exportUrl}>
                <a className="HeaderLine-link">here</a>
              </CopyToClipboard>, a url will be added to your clipboard.
            Paste it in your new browser and you are gonna start the import procedure
          </HeaderLine>


        </div>
        <div className="Responses" >
          <p className="Responses-text" >Responses: { responsesLength} / {questionsTot}</p>
        </div>
        <ImportPanel curState={this.state} onImport={(newState) => {
          this.setResponses(newState.responses)
          window.location.href = "/"
        }} />

        <Sections sections={sections} setResponse={this.setResponse} />
      </div>
    )
  }
}

const HeaderLine = ({children}) => <p className="HeaderLine"> {children}</p>


export default App;
