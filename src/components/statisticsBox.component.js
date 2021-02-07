import React from "react"



export default class StatisticsBox extends React.Component{
    constructor(props){
        super(props);
        

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
            <div className="statistics-box" >
                <h1 style={{color:"white",width:"50%",textAlign:"center",borderBottomStyle:"solid",borderBottomColor:"white"}}>Statistics</h1>
                {this.props.statistics.map((a)=>this.renderStatistic(a))}
            </div>
        )
    }
}