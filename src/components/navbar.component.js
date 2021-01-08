import React, {Component} from 'react';
import "../styles/navbar.css";
import {Link} from 'react-router-dom';
import images from "../sample_data/images.js";

import instagram_logo from "../assets/instagram.png";
import facebook_logo from "../assets/facebook.png";





export default class NavBar extends Component {

    render(){
        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <div>
                        
                        <img className="navbar-logo" alt="" src={images.logo} onClick={()=>window.location="/"}/>
                        <p className="title">ECOS</p>
                        <div className="social-container">
                            <img className="instagram" src={instagram_logo} onClick={()=>window.open("https://www.instagram.com/joebiden/")}/>
                            <img className="instagram" src={facebook_logo} onClick={()=>window.open("https://www.instagram.com/joebiden/")}/>
                        </div>
                    </div>    
                </div>
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