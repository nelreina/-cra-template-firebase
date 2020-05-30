import React from 'react'

const FlexCenter = ({ children, height = "100%" }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height
    }}>
      {children}
    </div>
  )
}

export default FlexCenter
