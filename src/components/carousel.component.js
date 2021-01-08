import React from "react"

import images from "../sample_data/images"

export default class Carousel extends React.Component{
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
            <div className="preview-img" style={{backgroundImage:`url(${images.unsamples[article.Main_Image]})`}}>
                <div onClick={()=>{alert("add link to article page")}} className="info-box">
                    <h3 className="info-texts">{article.Title}</h3>
                    <h5 className="info-texts">by: {article.Author}</h5>
                    <p className="info-texts">{article.Description}</p>
                </div>
            </div>
        </div>
            )
    }

    onBackClick(){
        if(this.state.currentArticle===0){
            this.setState({
                currentArticle:this.state.articles.length-1
            });
        } else {
            this.setState({
                currentArticle:this.state.currentArticle-1
            })
        }
    }

    onForwardClick(){
        this.setState({
            currentArticle:(this.state.currentArticle+1)%this.state.articles.length
        })
    }

    componentDidMount(){
        this.timer= setInterval(()=>{
            this.onForwardClick();
        },5000)
      }
    
    componentWillUnmount(){
        clearInterval(this.timer);
      }



    render(){
        return(
            <div className="carousel">
                {this.renderArticle(this.state.articles[this.state.currentArticle])}
                <p className="left arrow" onClick={()=>this.onBackClick()}>&#10094;</p>
                <p className="right arrow" onClick={()=>this.onForwardClick()}>&#10095;</p>
                
                
            </div>
        )
    }
}