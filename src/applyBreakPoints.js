import React from 'react'
import {applyContainerQuery} from 'react-container-query'

const query = {
  'xsmall': {
    minWidth: 0,
    maxWidth: 767
  },
  'small': {
    minWidth: 768,
    maxWidth: 921
  },
  'medium': {
    minWidth: 922,
    maxWidth: 1199
  },
  'large': {
    minWidth: 1200,
    maxWidth: 5000,
  }
};

export default function applyBreakPoints(Comp) {
  const CompClass = React.createClass({
    render: function() {
      return (
        <Comp {...this.props} />
      );
    }
  });
  CompClass.displayName = Comp.displayName

  return applyContainerQuery(CompClass,query)
}
