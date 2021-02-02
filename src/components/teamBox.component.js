import React from "react"

import images from "../sample_data/images"

export default class TeamBox extends React.Component{
    constructor(props){
        super(props);

    }
//article.image is temporary and should be replaced in future version

    renderMember(m){
        return (
        <div className="member-group" key={Math.random()} >
            <div className="info-box" style={{backgroundImage:"url("+images.morgan+")"}}/>    
            <h4 className="info-texts">{m.Name}</h4>
            <h5 className="info-texts">{m.Job}</h5>
        </div>
            )
    }

    
    render(){
        const members=this.props.members;//.slice(0,4);
        
        return(
            <div className="team-box">
                {members.map((a)=>this.renderMember(a))}
            </div>
        )
    }
}