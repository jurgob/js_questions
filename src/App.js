import React from 'react';
import './App.css';
import Sections from './components/Sections'

import sha1 from 'sha1';
import sectionsList from './sectionsList'
const localStorage = window.localStorage

const prepareQuestions = (questions, responses, key) => questions.map((q,idx)=> {
  const id = sha1(q.code)
  return {
    ...q,
    id,
    response: responses[id]
  }

})

const flatSection = (sectionsList,responses) => sectionsList.map((s, idx) => ({
  ...s,
  subsections: s.subsections.map((sub ,sidx) => ({
    ...sub,
    questions: prepareQuestions(sub.questions, responses, idx+'__'+sidx)
  }) )
}))


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

    this.setState({
      responses: responses
    })

    localStorage.setItem("responses",JSON.stringify(responses))

  }

  render(){
    const {sectionsList,responses} = this.state;

    const sections = flatSection(sectionsList, responses)

    const responsesLength = Object.keys(responses).length

    let questionsTot = 0
    sectionsList.forEach( s => s.subsections.forEach(sub => questionsTot += sub.questions.length   ) )

    return (
      <div className="App" >
        <div className="App-header">
          <h2>Javascript Questions</h2>
          <p>
            This is a little test about your javascript ability. Write down in the inputs what the <code>log()</code> function will print
          </p>
          <p>
            <b>note:</b> if the result is a string , wrap your response with double quote: <code>false</code> will be a bolean, <code>"false"</code> will be a string.
          </p>
          <p>
            The structure of the tests follows this tutorial: <a style={{color:"white"}}  href="http://xahlee.info/js/js.html">xahlee.info/js</a>
          </p>
        </div>
        <div style={{padding: "5px", textAlign:"left"}} >
          Respones: { responsesLength} / {questionsTot}
        </div>
        <Sections sections={sections} setResponse={this.setResponse} />
      </div>
    )
  }
}




export default App;
