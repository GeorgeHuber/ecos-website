import React from 'react'

import article1 from "../sample_data/articles/article1.json"
import article2 from "../sample_data/articles/article2.json"
import article3 from "../sample_data/articles/article3.json"
import statistic1 from "../sample_data/statistics/statistic1.json"
import statistic2 from "../sample_data/statistics/statistic2.json"
import statistic3 from "../sample_data/statistics/statistic3.json"

import _members from "../sample_data/members.json"

import quotes from "../sample_data/quotes.json"

import "../styles/home.css"

import Carousel from "../components/carousel.component"
import ActionsBox from "../components/actionsBox.component"
import StatisticsBox from "../components/statisticsBox.component"
import TeamBox from "../components/teamBox.component"
import BlockQuote from "../components/blockQuote.component"


export default class Home extends React.Component {
  constructor(props){
    super(props);

    this.state={
      articles:[article1,article2,article3],
      actions:[article1,article2,article3,article1],
      statistics:[statistic1,statistic2,statistic3,statistic1],
      members:_members.members,
      quote:quotes.Home
    }
  }

  //TODO:: Replace static numbers import with urls in articles
  

  render(){
    return(
      <div className="home">
        
        <Carousel articles={this.state.articles}/>
        <ActionsBox articles={this.state.actions}/>
        <TeamBox members={this.state.members}/>
        <StatisticsBox statistics={this.state.statistics}/>
        <BlockQuote quote={this.state.quote}/>
      </div>
    )
  }
}