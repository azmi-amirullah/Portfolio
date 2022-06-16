import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  const [ActiveNav, setActiveNav] = useState('home')
  console.log(process.env.PUBLIC_URL)

  return (
    <>
      <Header setActiveNav={setActiveNav} />
      <Nav ActiveNav={ActiveNav} setActiveNav={setActiveNav} />
      <About setActiveNav={setActiveNav} />
      <Experience />
      <Portfolio />
      <Projects />
      <Contact />
      <Footer setActiveNav={setActiveNav} />
    </>
  )
}

export default App
