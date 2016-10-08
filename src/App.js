import React from 'react';
import './App.css';
import StartTest from './components/StartTest'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import AnimatedPages from './components/AnimatedPages';
import sections from './sectionsList'

class App extends React.Component {
  render(){
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
        <div style={{paddingTop:"20px"}}>
          <Router history={browserHistory}>
            <Route path="/"  >
              <IndexRoute component={StartTest} />
              <Route component={AnimatedPages} >
                {sections.map((section)=>(
                  <Route path={section.link} component={section.component} />
                ))}
              </Route>
            </Route>
          </Router>
        </div>
      </div>
    )
  }
}

export default App;
