import React from 'react';

export const Layout = ({children}) => (
  <div style={{display:"table"}}  >
    {children}
  </div>
)

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
