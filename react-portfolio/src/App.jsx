import React from 'react'
import Header from './Components/header/header'
import Nav from './Components/Nav/nav'
import About from './Components/about/About'
import Experience from './Components/experience/experience'
import Services from './Components/services/Services'
import Portfolio from './Components/Portfolio/portfolio'
import Contact from './Components/contact/Contact'
import Footer from '<./src/Components/footer/footer'

const App = () => {
    return (
      <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
        
          <Contact />
          <Footer />
      </>
    )
  }
  
  export default App