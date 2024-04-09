import { BrowserRouter } from "react-router-dom"

import { Navbar, Welcome, MyPublications, CustomerReviews } from "./components"

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from "./components/style/GlobalStyle"
import mobileWidth from "./components/style/mobileWidth"

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mobileWidth}>
        <GlobalStyle />
        <div className='relative z-0 bg-primary'>
          <Navbar />
          <Welcome />
          <MyPublications />
          <CustomerReviews />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
