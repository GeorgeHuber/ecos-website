import React from 'react'

import "../styles/about.css"


export default class About extends React.Component {

    componentWillUnmount(){
        window.scrollTo(0, 0);
      }

    render(){
        return (
            <div className="about">
                <p>You are on the about page!</p>
            </div>
        )
    }
}