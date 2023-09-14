import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import aboutbg from '../../assets/5.jpg'
import Footer from '../../components/footer/Footer'
import AboutUs from '../../components/aboutUs/AboutUs'

function About() {
  return (
    <>
      <Navbar />
      <Hero clsName="hero-mid"
            heroImg = {aboutbg}
            title = "Your Journey"
            btnClass = "hide"
      />
      <AboutUs />
      <Footer />
    </>
  )
}

export default About