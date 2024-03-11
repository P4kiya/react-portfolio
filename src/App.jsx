import Header from './components/header/header'
import Hero from './components/hero/hero'
import Main from './components/main/main'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

function App() {

  return (
    <div className='container' id='up'>
      <Header />
      <Hero />
      <div className='divider'/>
      <Main />
      <div className='divider'/>
      <Contact />
      <div className='divider'/>
      <Footer />

      <a href="#up">
        <button className='icon-keyboard_arrow_up scroll2top'></button> 
      </a>
    </div>
  )
}

export default App
