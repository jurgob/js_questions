import React from 'react';
import { BrowserRouter as Router, Route,  } from 'react-router-dom'

const countResponses = (state) => {
  return Object.keys(state.responses).length

}
const ImportPanelInternal = (props) => {
    const {curState, onImport, match, location} = props;
    let params = new URLSearchParams(location.search);

    const {responses} = curState;
    const url = `${window.location.origin}/import?state=${encodeURI(JSON.stringify({responses}))}`

    const CurState = () =>  curState ? (<pre>{url}</pre>) : (<span>"-"</span>);
    const newState = JSON.parse(params.get("state"))
    console.log(newState)
    return (
      <div className="ImportPanel" >
        <p> After the importing, you are gonna have {countResponses(newState)} responses. Now you have {countResponses(curState)} responses </p>
        <p style={{marginBottom:"15px"}} > Click the following button to proceed: </p>
        <input className="ImportPanel-btn" value="Import" type="submit" onClick={() => {
          onImport(newState)
        }} />
      </div>
    )
}

const ImportPanel = (props) => {

  return (
    <Router>
      <Route component={({match,location}) => <ImportPanelInternal {...props} match={match} location={location} />} exact={false} path="/import"  />
    </Router>
  )
}


export default ImportPanel;