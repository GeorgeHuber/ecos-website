import React from "react"

import images from "../sample_data/images"

export default class ActionsBox extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            articles:props.articles,
            currentArticle:0
        }

        this.timer=null;
    }
//article.image is temporary and should be replaced in future version

    renderArticle(article){
        return (
        <div key={article.Id} >
            <div className="info-box">
                <div className="preview-img" style={{backgroundImage:`url(${images.unsamples[article.Main_Image]})`}}/>
                <h4 className="info-texts">{article.Title}</h4>
            </div>
        </div>
            )
    }


    render(){
        return(
            <div className="actions-box">
                {this.state.articles.map((a)=>this.renderArticle(a))}
            </div>
        )
    }
}