import React from 'react'
import axios from "axios"

import server from "../config.js"

import "../styles/news.css"

export default class News extends React.Component {
    constructor(props){
        super(props);
        this.state={
            articles:[{}]
        }
    }

    componentDidMount(){
        axios.get(server+"articles/").then((res)=>{
            this.setState({articles:res.data});
            console.log(res.data);
        })
        .catch(err=>console.log(err))
    }
    componentWillUnmount(){
        window.scrollTo(0, 0);
      }
     
    renderArticle(article)  {
        return(
            <div className="article" style={{backgroundImage:"url("+article.Main_Image+")"}} onClick={()=>{
                window.location="articles/"+article._id
            }}>
                <div className="banner">
                    <h1>{article.Title}</h1>    
                </div>    
            </div>
        )
    }

    render(){
        return (
            <div className="news">
                {this.state.articles.map((a)=>this.renderArticle(a))}
            </div>
        )
    }
}