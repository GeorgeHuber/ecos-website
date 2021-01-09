import React from "react";

export default class BlockQuote extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="block-quote">
                <h1 className="quote">{this.props.quote.Quote}</h1>
                <h3 className="author">{this.props.quote.Author}</h3>
            </div>
        )
    }
}