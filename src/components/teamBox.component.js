import React from "react"


export default class TeamBox extends React.Component{

    renderMember(m){
        return (
        <div className="member-group" key={Math.random()} >
            <div className="info-box" style={{backgroundImage:"url("+m.Picture+")"}}/>    
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