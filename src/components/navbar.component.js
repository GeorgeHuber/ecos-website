import React, {Component} from 'react';
import "../styles/navbar.css";
import {Link} from 'react-router-dom';

import instagram_logo from "../assets/instagram.png";
import facebook_logo from "../assets/facebook.png";
import twitter_logo from "../assets/twitter.png"

import burger from "../assets/hamburger.png"

import logo from "../assets/logos/logo.png";

export default class NavBar extends Component {
    constructor(props){
        super(props);

        this.state={isOpen:false};
    }
    render(){
        return (
            
            <nav >
                <div className="navbar-top" >
                <div className="burger" onClick={()=>this.setState({isOpen:!this.state.isOpen})}style={{backgroundImage:"url("+burger+")"}}/>
                    <p className="title-top">ECOS</p>
                    <img className="navbar-logo-top" alt="" src={logo} onClick={()=>window.location="/"}/>
                </div>
                
                <div className="navbar" style={this.state.isOpen?{display:"block"}:{}}>
                    
                    <div className="navbar-brand">
                    <div className="mobile-container">
                        
                        <img className="navbar-logo" alt="" src={logo} onClick={()=>window.location="/"}/>
                        <p className="title">ECOS</p>
                        <div className="social-container">
                            <img className="instagram" alt="instagram" src={instagram_logo} onClick={()=>window.open("https://www.instagram.com/ecos.lhs/")}/>
                            <img className="instagram" alt="facebook" src={facebook_logo} onClick={()=>window.open("https://www.instagram.com/ecos.lhs/")}/>
                            <img className="instagram" alt="twitter" src={twitter_logo} onClick={()=>window.open("https://www.instagram.com/ecos.lhs/")}/>
                        </div>
                    </div>    
                </div>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li onClick={()=>this.setState({isOpen:false})} className="navbar-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li onClick={()=>this.setState({isOpen:false})} className="navbar-item">
                        <Link to="/news" className="nav-link">News</Link>
                    </li>
                    <li onClick={()=>this.setState({isOpen:false})} className="navbar-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    
                </ul>
                </div>
                </div>
            </nav>
        )
    }
}