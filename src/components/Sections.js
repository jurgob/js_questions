import React from 'react';
import StartTest from './StartTest'
import Navigation from './Navigation'
import QuestionSection from './QuestionSection'
import {Layout, MenuCol, ContCol} from './Layout2Col'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'


const Sections = ({sections,setResponse}) => (
  <div style={{paddingTop:"20px"}}>

    <Router >
      <div>
      <Layout>
        <MenuCol width="280px" >
          <Navigation />
        </MenuCol>
        <ContCol>
          <Match component={StartTest} exactly pattern="/" />
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
          </ContCol>
        </Layout>
      </div>
    </Router>
  </div>
)

export default Sections
