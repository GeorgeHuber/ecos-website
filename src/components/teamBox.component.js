import React from "react"

import images from "../sample_data/images"

export default class TeamBox extends React.Component{
    constructor(props){
        super(props);

    }
//article.image is temporary and should be replaced in future version

    renderMember(m){
        return (
        <div key={Math.random()} >
            <div className="info-box">
                
                <h4 className="info-texts">{m.Name}</h4>
            </div>
        </div>
            )
    }


    render(){
        return(
            <div className="team-box">
                {this.props.members.map((a)=>this.renderMember(a))}
            </div>
        )
    }
}