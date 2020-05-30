import React from 'react'
import { Container, AppBar } from '@material-ui/core'
import MenuAppBar from './MenuAppBar'

const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Container>
          <div>Some</div>

        </Container>
      </AppBar>
      {/* <MenuAppBar /> */}
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout
