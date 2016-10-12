import React from 'react';
import './App.css';
import StartTest from './components/StartTest'
import QuestionSection from './components/QuestionSection'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import AnimatedPages from './components/AnimatedPages';
import sectionsList from './sectionsList'

console.log('sectionsList ',sectionsList)

const sections = sectionsList.reduce((res,curr) => res.concat(curr.subsections) ,[] )

console.log('sections ',sections)


const generateSection = (props) => {
  console.log('generateSection ',props)
  return (_propsFromRoute) => <QuestionSection {...{ _propsFromRoute, ...props  }}  />
}


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
                {sections.map((section, idx)=> {
                  const _nextLink = sections[idx+1] ? sections[idx+1].link : undefined
                  let introduction = "";
                  if(section.tutorial_link)
                    introduction = (<span> Read more about {section.label} here: <a href={section.tutorial_link} > xahlee.info {section.label} section</a>  </span>)
                  return <Route
                    key={idx}
                    path={section.link}
                    component={generateSection({
                      ...section,
                      nextLink:_nextLink,
                      title: section.label,
                      introduction
                    })}
                  />

                })}
              </Route>
            </Route>
          </Router>
        </div>
      </div>
    )
  }
}

export default App;
