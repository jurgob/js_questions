import React from 'react';
import applyBreakPoints from '../applyBreakPoints'

class _Layout extends React.Component{

  render(){
    const {children,containerQuery} = this.props;
    return (
      <div >
        <div >

          {(containerQuery.medium || containerQuery.large ) &&  children}

          {(containerQuery.xsmall || containerQuery.small ) &&  children[1].props.children}
        </div>
      </div>
    )
  }

}

export const Layout = applyBreakPoints(_Layout)

export const MenuCol = ({children, width, style}) => (
  <div style={{
    display:"table-cell",
    ...style
  }}  >
    <div style={{
      width
    }}>
      {children}
    </div>
  </div>
)

export const ContCol = ({children, style}) => (
  <div style={{
    display:"table-cell",
    width:"100%",
    ...style
  }} >
    {children}
  </div>
)



export default {
  Layout,
  MenuCol,
  ContCol
}
