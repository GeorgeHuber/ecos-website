import React from "react"

import images from "../sample_data/images"

export default class Carousel extends React.Component{
    constructor(props){
        super(props);

        this.state={
            articles:props.articles
        }
    }
//article.image is temporary and should be replaced in future version

    renderArticle(article){
        return (
        <div key={article.Id}>
            <h1>{article.Author}</h1>
            <img alt="" src={images.unsamples[article.Main_Image]}/>
        </div>
            )
    }


    render(){
        return(
            <div>
                {this.state.articles.map((a)=>this.renderArticle(a))}
            </div>
        )
    }
}