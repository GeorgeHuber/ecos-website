import React from "react"

import images from "../sample_data/images"

export default class ActionsBox extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
        }

        this.timer=null;
    }
//article.image is temporary and should be replaced in future version

    renderArticle(article){
        return (
            <div key={article.Id} className="info-box">
                <div className="preview-img" style={{backgroundImage:`url(${images.unsamples[article.Main_Image]})`}}/>
                <h4 className="info-texts">{article.Title}</h4>
            </div>
        
            )
    }


    render(){
        return(
            <div className="actions-box" >
                <h1>Recent Action</h1>
                <div className="actions-box-mobile">
                {this.props.articles.map((a)=>this.renderArticle(a))}
            </div>
            </div>
        )
    }
}