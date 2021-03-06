import React from "react"

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
            <div key={article._id} className="info-box" onClick={()=>{window.location="/articles/"+article._id}}>
                <div className="preview-img" style={{backgroundImage:`url(${article.Main_Image})`}}/>
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