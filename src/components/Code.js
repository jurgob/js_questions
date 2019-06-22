import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

import Dimensions from './Dimensions';
let beautify = require('js-beautify').js_beautify
import SyntaxHighlighter from 'react-syntax-highlighter';

/** Display a row response with indentation and syntax higlight  */
class Code extends Component {
  render() {
    let {id,children,containerWidth} = this.props;
    const width = containerWidth ? containerWidth+"" : "900";

    return (
      <div
        className="row-response-viewer"
        style={{
          width:width+"px",
          overflow:"hidden"
        }}
       >
        <SyntaxHighlighter id={id} language='json' >
          {beautifyCode(children)}
        </SyntaxHighlighter>
      </div>
    );
  }
}

const {oneOfType, object, string, number} = PropTypes
Code.propTypes = {
  children: oneOfType([object, string]),
  id: string,
  containerWidth: number
}

Code.displayName = 'RowResponseViewer'

export default  Dimensions()(Code)


function beautifyCode(toBeauty){
  const text = (typeof(toBeauty) === 'object' )
    ? JSON.stringify(toBeauty)
    : toBeauty+""

  return beautify(text);
}
