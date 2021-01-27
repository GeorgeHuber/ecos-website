import React from "react"
import axios from "axios"

import server from "../config.js"

export default class Article extends React.Component{
    constructor(props){
        super(props)
        this.state={
            article:null
        }
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        axios.get(server+"/articles/get",{params:{id:id}}).then((res)=>{
            this.setState({article:res.data});
            console.log(res.data);
        })
        .catch(err=>console.log(err))
    }
    render(){
        return(
            <div className="articles" style={{whiteSpace:"pre-wrap"}}>
                {this.state.article?this.state.article.Body:""}
            </div>
        )
    }
}