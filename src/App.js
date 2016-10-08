import React from 'react';
import './App.css';
import WarmUp from './components/sections/WarmUp'
import Basics from './components/sections/Basics'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


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
        <div style={{padding:"20px"}}>
          <Router history={browserHistory}>
            <Route path="/">
              <IndexRoute component={WarmUp} />
              <Route path="/basics" component={Basics} />
            </Route>
          </Router>
        </div>
      </div>
    )
  }
}

export default App;
