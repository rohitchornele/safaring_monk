import React, { Component } from 'react'
import './navbar.css'
import { MenuItems } from './menu-items/MenuItems.js'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    
    render() {
        return (
            <nav className='nav-items'>
                <Link className='brand' to="/">
                    <h1 className="nav-logo">Brand</h1>
                </Link>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ?
                        "fas fa-times" :
                        "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.clsName} to={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}</Link>
                            </li>
                        );
                    })}
                    {/* <button className='signUpButton'>Sign Up</button> */}
                
                </ul>
            </nav>
        )
    }
}

export default Navbar