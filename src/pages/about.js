import React from 'react'
import axios from "axios"

import server from "../config"

import "../styles/about.css"

import logo from "../assets/logos/logo.png"
export default class About extends React.Component {
    constructor(props){
        super(props);
        this.state={
            members:[]
        }
    }

    componentDidMount(){
        axios.get("" + server + "members/").then((res) => {
            this.setState({ members: res.data[0].members});
            
            })
            .catch(err => console.log(err))
    }

    componentWillUnmount(){
        window.scrollTo(0, 0);
      }


      renderMember(m){
        return (
        <div className="card member-group2" key={Math.random()} >
            <div className="img-box" style={{backgroundImage:"url("+m.Picture+")"}}/>    
            <h2 className="info-texts">{m.Name}</h2>
            <h4 className="info-texts">{m.Job}</h4>
            <p className="bio">{m.Bio}</p>
        </div>
            )
        }

    render(){
        return (
            <div className="about">
                <div className="section one">
                    
                    <img className="big-logo" alt="logo" src={logo}/> 
                    <h2 className="big" >Earth's Climate and Ocean Sustainability</h2>
             
                </div>
                <div className="section two">
                    <div className="card question gradient-border">
                    <h2 className="medium" >Our Mission</h2>
                    </div>
                    <div className="card body">

                    </div>
                </div>
                <div className="section three">
                <div className="card question gradient-border">
                    <h2 className="medium" >Our Team</h2>
                    
                </div>
                {this.state.members.map((a)=>this.renderMember(a))}
                </div>
                
                <div className="section four">
                    
                </div>
            </div>
        )
    }
}