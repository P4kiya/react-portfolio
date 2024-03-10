import Header from './components/header/header'
import Hero from './components/hero/hero'
import Main from './components/main/main'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import { useState } from 'react'

function App() {

  return (
    <div className='container'>
      <Header />
      <div className='divider'/>
      <Hero />
      <div className='divider'/>
      <Main />
      <div className='divider'/>
      <Contact />
      <div className='divider'/>
      <Footer />
    </div>
  )
}

export default App
