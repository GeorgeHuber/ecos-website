import React from "react";

import tree from "../assets/treeSillouette.png"


export default class BlockQuote extends React.Component{

    render(){
        return(
            <div className="block-quote">
                <img className="tree" alt="" src={tree}/>
                <h1 className="quote">{this.props.quote.Quote}</h1>
                <h3 className="author">- {this.props.quote.Author}</h3>
                
            </div>
        )
    }
}