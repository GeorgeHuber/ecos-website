import React from "react"

import images from "../sample_data/images"

import forest from "../assets/forest.jpg"


export default class StatisticsBox extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            statistics:props.statistics,
        }

        this.timer=null;
    }
//article.image is temporary and should be replaced in future version

    renderStatistic(stat){
        return (
        
            <div className="info-box" key={stat.Id}>
                
                <h2 className="info-texts">{stat.Bold_Title}</h2>
                <h4 className="info-texts">{stat.Trailing_Title}</h4>
            </div>
        
            )
    }


    render(){
        return(
            <div className="statistics-box" style={{backgroundImage:"url("+forest+")"}}>
                <h1 style={{color:"white",width:"50%",textAlign:"center",borderBottomStyle:"solid",borderBottomColor:"white"}}>Statistics</h1>
                {this.state.statistics.map((a)=>this.renderStatistic(a))}
            </div>
        )
    }
}