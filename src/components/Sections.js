import React from 'react';
import StartTest from './StartTest'
import Navigation from './Navigation'
import NavigationMobile from './NavigationMobile'
import QuestionSection from './QuestionSection'
import {Layout, MenuCol, ContCol} from './Layout2Col'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import applyBreakPoints from '../applyBreakPoints'
import  ReactGA from 'react-ga';
ReactGA.initialize(process.env.REACT_APP_JSQUEST_UA);

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

const XhleeRoute = ({sections,setResponse}) => (
  <div>
  <Route
    path="/sections"
    render={({ location }) => {
    // pathname, pattern
      const {pathname} = location;
      let section;
      let nextLink;
      sections.forEach((s,i) => {
        const subIdx = s.subsections.findIndex(sub => `${sub.link}` === pathname)
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
</div>
)

// Routes without their own Router, so tests can render them in a MemoryRouter
export const SectionsRoutes = ({sections,setResponse,containerQuery}) => {

  const renderSections = ({location, history}) => {
    const showMobileNav = containerQuery.xsmall || containerQuery.small
    logPageView()
    const mobileNav = (
      <NavigationMobile
        curPath={location.pathname}
        onPathChange={(path) => history.push(path)}
        sections={sections}
      />
    )
    return (
      <div>
        {showMobileNav && (
          <div style={{margin:"5px 5px "}}>
            {mobileNav}
          </div>
        )}
        <Layout>
          <MenuCol width="280px" >
            <div style={{padding:"5px"}}>
              <Navigation sections={sections}  />
            </div>
          </MenuCol>
          <ContCol>
            <div style={{padding:"5px"}}>
              <Route component={StartTest} exact={true} path="/"  />
              <Switch>
                {/* the Next Section button used to link to /sections/sections/..., keep those links working */}
                <Route
                  path="/sections/sections/:link"
                  render={({match}) => <Redirect to={`/sections/${match.params.link}`} />}
                />
                <Route render={() => <XhleeRoute {...{sections,setResponse}} />} />
              </Switch>
            </div>
          </ContCol>
        </Layout>
        {showMobileNav && (
          <div style={{margin:"15px 5px "}} >
            {mobileNav}
          </div>
        )}
      </div>
    )
  }

  // no path: matches every url, the sections are picked by XhleeRoute
  return <Route render={renderSections} />
}

const Sections = (props) => (
  <div >
    <Router>
      <SectionsRoutes {...props} />
    </Router>
  </div>
)
export default applyBreakPoints(Sections)
