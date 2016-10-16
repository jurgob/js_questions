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
      let nextLink;
      sections.forEach((s,i) => {
        const subIdx = s.subsections.findIndex(sub => sub.link === pathname)
        if(subIdx !== -1){
          section = s.subsections[subIdx];

          if(s.subsections[subIdx+1])
            nextLink = s.subsections[subIdx+1].link
          else if( sections[i+1] && sections[i+1].subsections[0]  )
            nextLink = sections[i+1].subsections[0].link

        }

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
            nextLink={nextLink}
          />
        </div>
      )
    }}
   />
)

const Sections = ({sections,setResponse}) => (
  <div >
    <Router
    >
      {() => {
        logPageView()
        return (
          <div>
            <Layout>
              <MenuCol width="280px" >
                <div style={{padding:"5px"}}>
                  <Navigation />
                </div>
              </MenuCol>
              <ContCol>
                <div style={{padding:"5px"}}>
                  <Match component={StartTest} exactly pattern="/"  />
                  <XhleeMatch {...{sections,setResponse}} />
                </div>
              </ContCol>
            </Layout>
          </div>
        )
      }}

    </Router>
  </div>
)

export default Sections
