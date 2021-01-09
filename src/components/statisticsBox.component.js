import React from "react"

import images from "../sample_data/images"

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
        <div key={stat.Id} >
            <div className="info-box">
                
                <h4 className="info-texts">{stat.Bold_Title}</h4>
            </div>
        </div>
            )
    }


    render(){
        return(
            <div className="statistics-box">
                {this.state.statistics.map((a)=>this.renderStatistic(a))}
            </div>
        )
    }
}