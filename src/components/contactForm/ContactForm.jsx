import React from 'react'
import './contactForm.css'

function ContactForm() {
  return (
    <div className='form-container'>
        <h1>Send a message to us!</h1>
        <form className="contact-form" action="/success">
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Subject'/>
            <textarea placeholder='Message' rows="4"></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm