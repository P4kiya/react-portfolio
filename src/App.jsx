import Header from './components/header/header'
import Hero from './components/hero/hero'
import Main from './components/main/main'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import { useEffect, useState } from 'react'

function App() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setshowScrollBTN(true)
      } else {
        setshowScrollBTN(false)
      }
      console.log(window.scrollY)
    })
  }, []);

  const [showScrollBTN, setshowScrollBTN] = useState(false);
  return (
    <div className='container' id='up'>
      <Header />
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />

      <a style={{opacity: showScrollBTN? 1:0,transition:"0.3s"}} href="#up">
        <button className='icon-keyboard_arrow_up scroll2top'></button>
      </a>
    </div>
  )
}

export default App
