import React from 'react';
import './App.css';
import Sections from './components/Sections'


import sectionsList from './sectionsList'
const localStorage = window.localStorage

const prepareQuestions = (questions, responses, key) => questions.map((q,idx)=> ({
  ...q,
  id:key+"__"+idx,
  response: responses[key+"__"+idx]
}))

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

    console.log('response ',response)
    console.log('this.state.responses ', this.state.responses )

  }

  render(){
    const {sectionsList,responses} = this.state;

    const sections = flatSection(sectionsList, responses)

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
        <Sections sections={sections} setResponse={this.setResponse} />
      </div>
    )
  }
}




export default App;
