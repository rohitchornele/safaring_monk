import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import herobg from '../../assets/2.jpg'
import Destination from '../../components/destination/Destination'
import Trips from '../../components/trips/Trips'
import Footer from '../../components/footer/Footer'
function Home() {
  return (
    <>
        <Navbar />
        <Hero clsName="hero"
              heroImg = {herobg}
              title = "Your Journey Your Story"
              text = "Choose your favourite destination" 
              btnText = "Travel Plan"
              url = "/"
              btnClass = "show"
        />
        <Destination />
        <Trips />
        <Footer />
    </>
  )
}

export default Home