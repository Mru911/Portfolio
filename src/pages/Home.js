import React from 'react'
import About from './About/About'
import Banner from './Banner/Banner'
import Contact from './Contact/Contact'
import Portfolio from './Portfolio/Portfolio'
import Services from './Services/Services'

const Home=()=> {
  return (
    <div>
        <Banner/>
        <Services></Services>
        <Portfolio></Portfolio>
        <About></About>
        <Contact></Contact>
    </div>
  )
}

export default Home