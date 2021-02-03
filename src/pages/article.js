import React from "react"
import axios from "axios"

import server from "../config.js"

import "../styles/article.css"
export default class Article extends React.Component{
    constructor(props){
        super(props)
        this.state={
            article:{}
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        axios.get(server+"articles/get",{params:{id:id}}).then((res)=>{
            this.setState({article:res.data});
            console.log(res.data);
        })
        .catch(err=>console.log(err))
    }
    render(){
        const article=this.state.article;
        return(
            <div className="article" style={{whiteSpace:"pre-wrap"}}>
                <div className="header-image" style={{backgroundImage:"url("+article.Main_Image+")"}}>
                    <div className="header-text"> 
                        <h1 className="title">{article.Title}</h1>
                        <h5 className="author">{article.Author}</h5>
                    </div> 
               </div>
               <div className="article-body">
                {article.Body?article.Body.replaceAll("\\n","\n"):""}
                </div>
            </div>
        )
    }
}