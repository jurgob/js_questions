import React from 'react';

const countRight = (questions) => questions.filter(q => q.response === q.solution).length

// Sticky bar with the current section; tapping it opens the list of all sections
class NavigationMobile extends React.Component {
  constructor(props){
    super(props);
    this.state = {open: false}
  }

  toggle = () => this.setState({open: !this.state.open})

  goTo = (path) => {
    this.setState({open: false})
    if(path !== this.props.curPath)
      this.props.onPathChange(path)
  }

  render(){
    const {curPath, sections} = this.props
    const {open} = this.state

    let current
    sections.forEach(({title, subsections}) => subsections.forEach(sub => {
      if(sub.link === curPath)
        current = {...sub, title}
    }))

    return (
      <nav className="NavMobile">
        <button
          type="button"
          className="NavMobile-toggle"
          aria-expanded={open}
          onClick={this.toggle}
        >
          <span className="NavMobile-current">
            {current ? (
              <span>
                <span className="NavMobile-current-title">{current.title}</span>
                <span className="NavMobile-current-label">{current.label}</span>
              </span>
            ) : (
              <span className="NavMobile-current-label">Choose a section</span>
            )}
          </span>
          {current && (
            <span className="NavMobile-count">{countRight(current.questions)} / {current.questions.length}</span>
          )}
          <span className="NavMobile-chevron">{open ? '▲' : '▼'}</span>
        </button>

        {open && (
          <div className="NavMobile-panel">
            {sections.map(({title, subsections}) => (
              <div className="NavMobile-group" key={title}>
                <h2 className="NavMobile-group-title">{title}</h2>
                {subsections.map(({label, link, questions}) => {
                  const right = countRight(questions)
                  const done = questions.length > 0 && right === questions.length
                  const active = link === curPath
                  return (
                    <button
                      type="button"
                      key={link}
                      className={"NavMobile-item" + (active ? " is-active" : "")}
                      onClick={() => this.goTo(link)}
                    >
                      <span className="NavMobile-item-label">{label}</span>
                      <span className={"NavMobile-count" + (done ? " is-done" : "")}>
                        {done ? '✓ ' : ''}{right} / {questions.length}
                      </span>
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
        )}
      </nav>
    )
  }
}

export default NavigationMobile
