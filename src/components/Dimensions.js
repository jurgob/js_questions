
import React from 'react'

const style = {
  padding: 0,
  border: 0
}

function defaultGetWidth (element) {
  return element.clientWidth
}

function defaultGetHeight (element) {
  return element.clientHeight
}

class DimensionsHOC extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
    this.updateDimensions = this.updateDimensions.bind(this);
    this.onResize = this.onResize.bind(this);
  }


  updateDimensions(){
    const container = this.refs.container
    if (!container) {
      throw new Error('Cannot find container div')
    }
    this.setState({
      containerWidth: this.props.getWidth(container),
      containerHeight: this.props.getHeight(container)
    })
  }

  onResize(){
    if (this.rqf) return
    this.rqf = window.requestAnimationFrame(() => {
      this.rqf = null
      this.updateDimensions()
    })
  }

  componentDidMount () {
    this.updateDimensions()
    window.addEventListener('resize', this.onResize, false)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize)
  }

  render () {
    const ComposedComponent = this.props.composedComponent
    return (
      <div style={style} ref='container'>
        {(this.state.containerWidth || this.state.containerHeight) &&
          <ComposedComponent {...this.state} {...this.props} updateDimensions={this.updateDimensions}/>}
      </div>
    )
  }
}

/** Dimensions  wrapper*/
export default function Dimensions({ getHeight,  getWidth } = {}) {
  return (ComposedComponent) => {
    if(!getHeight) getHeight = defaultGetHeight;
    if(!getWidth) getWidth = defaultGetWidth;

    return (props) => (
      <DimensionsHOC
        {...props}
        composedComponent={ComposedComponent}
        {...{getHeight, getWidth}}
      />
    )
  }
}
