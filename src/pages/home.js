import React from 'react'

import article1 from "../sample_data/articles/article1.json"
import article2 from "../sample_data/articles/article2.json"
import article3 from "../sample_data/articles/article3.json"

import "../styles/home.css"

import Carousel from "../components/carousel.component"

export default class Home extends React.Component {
  constructor(props){
    super(props);

    this.state={
      articles:[article1,article2,article3]
    }
  }

  //TODO:: Replace static numbers import with urls in articles
  

  render(){
    return(
      <div className="home">
        <div className="top">
        <p>You are on the home page!</p>
        <p>Created by {article1.Author}</p>
        </div>
        
        <Carousel articles={this.state.articles}/>
      </div>
    )
  }
}