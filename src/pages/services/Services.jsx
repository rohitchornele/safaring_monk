import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import aboutbg from '../../assets/6.jpg'
import Footer from '../../components/footer/Footer'
import Trips from '../../components/trips/Trips'

function Services() {
  return (
    <>
      <Navbar />
      <Hero clsName="hero-mid"
            heroImg = {aboutbg}
            title = "Your Journey"
            btnClass = "hide"
      />
      <Trips />
      <Footer />
    </>
  )
}

export default Services