import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import contactBg from '../../assets/4.jpg'
import Footer from '../../components/footer/Footer'
import ContactForm from '../../components/contactForm/ContactForm'

function Contact() {
  return (
    <>
      <Navbar />
      <Hero clsName="hero-mid"
            heroImg = {contactBg}
            title = "Your Journey"
            btnClass = "hide"
      />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact