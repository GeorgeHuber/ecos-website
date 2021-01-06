import React, {Component} from 'react';
import "../styles/navbar.css"
import {Link} from 'react-router-dom'
import images from "../sample_data/images.js"








export default class NavBar extends Component {

    render(){
        return (
            <nav className="navbar">
                <Link to="/" className="navbar-brand">
                    <div>
                        
                        <img className="navbar-logo" alt="" src={images.logo}/>
                        
                        <p>ECOS</p>
                    </div>    
                </Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/news" className="nav-link">News</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    
                </ul>
                </div>
            </nav>
        )
    }
}