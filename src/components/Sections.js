import React from 'react';
import StartTest from './StartTest'
import Navigation from './Navigation'
import QuestionSection from './QuestionSection'
import {Layout, MenuCol, ContCol} from './Layout2Col'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'

import  ReactGA from 'react-ga';
ReactGA.initialize(process.env.REACT_APP_JSQUEST_UA);

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

const XhleeMatch = ({sections,setResponse}) => (
  <Match
    pattern="/*"
    render={({ pathname, pattern }) => {

      let section;
      sections.forEach(s => {
        const sub = s.subsections.find(sub => sub.link === pathname)
        if(sub)
          section = sub
      })

      if(!section)
        return <span></span>

      let introduction = "";
      if(section.tutorial_link)
        introduction = (<span> Read more about {section.label} here: <a href={section.tutorial_link} > xahlee.info {section.label} section</a>  </span>)
      return (
        <div>
          <QuestionSection
            {...section}
            title={section.label}
            introduction={introduction}
            onCheckResponse={(id, res) => setResponse(id, res)}
          />
        </div>
      )
    }}
   />
)

const Sections = ({sections,setResponse}) => (
  <div >
    {process.env.REACT_APP_JSQUEST_UA}
    <Router

    >
      {() => {
        logPageView()
        return (
          <div>
          <Layout>
            <MenuCol width="280px" >
              <Navigation />
            </MenuCol>
            <ContCol>
              <Match component={StartTest} exactly pattern="/"  />
              <XhleeMatch {...{sections,setResponse}} />
              </ContCol>
            </Layout>
          </div>
        )
      }}

    </Router>
  </div>
)

export default Sections
