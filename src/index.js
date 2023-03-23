import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Features  from './Features/Features'
import Testmonial from './Testmonial/Testmonial'
import Footer from './Footer/Footer'
// import logo from './img/logo.svg'

ReactDOM.render(
  <>
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Testmonial/>
      <Footer/>
    </div>
  </>,
  document.getElementById('root')
)
