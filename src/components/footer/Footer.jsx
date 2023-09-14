import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="top">
                <div className="">
                    <h1>Brand</h1>
                    <p>Choose your favourite destination</p>
                </div>
                <div className="icons">
                    <a href="/"><i className='fa-brands fa-facebook-square'></i></a>
                    <a href="/"><i className='fa-brands fa-instagram-square'></i></a>
                    <a href="/"><i className='fa-brands fa-twitter-square'></i></a>
                    <a href="/"><i className='fa-brands fa-github-square'></i></a>

                </div>
            </div>
            <hr />
            <div className="bottom">
                <div className="">
                    <h4>Project</h4>
                    <a href="/">Chnagelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div className="">
                    <h4>Project</h4>
                    <a href="/">Chnagelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div className="">
                    <h4>Project</h4>
                    <a href="/">Chnagelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div className="">
                    <h4>Project</h4>
                    <a href="/">Chnagelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
            </div>
        </div>
    )
}

export default Footer