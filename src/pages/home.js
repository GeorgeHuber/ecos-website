import React from 'react'
import axios from 'axios'


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

require('dotenv').config()

const server = "http://localhost:4000/"


export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [article1, article2, article3],
      actions: [article1, article2, article3, article1],
      statistics: [statistic1, statistic2, statistic3, statistic1],
      members: _members.members,
      quote: quotes.Home
    }
  }





  componentDidMount() {
    console.log(server)
    axios.get("" + server + "articles/").then((res) => {
      this.setState({ articles: res.data });
      console.log(res.data);
    })
      .catch(err => console.log(err))
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
      <div className="home">
        <div className="block-background one" id="mobile_bb">
          <Carousel articles={this.state.articles} />
        </div>
        <div className="block-background two two_elements" id="mobile_bb">
          <ActionsBox articles={this.state.actions} />
          <div className="block-background-split six">
            <div className="block-quote" style={{justifyContent:"space-around",display:"flex"}}>
              <h1 style={{textAlign:"center",fontSize:"4rem",fontWeight:"400",alignSelf:"center",margin:"2vh 2vw 2vh 2vw"}}>
                Promoting large scale action to combat environmental disaster
              </h1>
            </div>
          </div>
        </div>
        <div className="block-background three two_elements" id="mobile_bb">
          <StatisticsBox statistics={this.state.statistics} />
          <div className="block-background-split seven">
          <TeamBox members={this.state.members} />
          </div>
        </div>

        <div className="block-background five two_elements" id="mobile_bb">
          
          <StatisticsBox statistics={this.state.statistics} />
          <div className="block-background-split eight">
          <BlockQuote quote={this.state.quote} />
          </div>
        </div>
      </div>
    )
  }
}