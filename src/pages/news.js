import React from 'react'

import "../styles/news.css"

export default class News extends React.Component {

    componentWillUnmount(){
        window.scrollTo(0, 0);
      }
      
    render(){
        return (
            <div className="news">
                <p>You are on the News page!</p>
            </div>
        )
    }
}