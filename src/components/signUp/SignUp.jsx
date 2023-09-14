import React from 'react'
import './singUp.css'

function SignUp() {
  return (
    <div className='signup'>
        <h1>Subscribe to Our Newsletter</h1>
        <form className="contact-form" action="/success">
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Mobile Number'/>
            <button>Subscribe</button>
        </form>
    </div>
  )
}

export default SignUp