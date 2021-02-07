import React from 'react'
import axios from 'axios'


import "../styles/home.css"

import Carousel from "../components/carousel.component"
import ActionsBox from "../components/actionsBox.component"
import StatisticsBox from "../components/statisticsBox.component"
import TeamBox from "../components/teamBox.component"
import BlockQuote from "../components/blockQuote.component"

import server from "../config.js"


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    let article1={
      "Title":"",
      "Author":"",
      "Id":"",
      "Main_Image":0,
      "Description":"",
      "Body":"",
      "Other_Images":[]
  }
    this.state = {
      articles: [article1],
      actions: [article1],
      statistics: [],
      members: [],
      quote: {}
    }
  }





  componentDidMount() {
    
    axios.get("" + server + "articles/carousel").then((res) => {
      this.setState({ articles: res.data });
      console.log(res.data);
    })
      .catch(err => console.log(err))
  
    axios.get("" + server + "articles/actions").then((res) => {
    this.setState({ actions: res.data });
    console.log(res.data);
    })
    .catch(err => console.log(err))
    
    axios.get("" + server + "members/").then((res) => {
      this.setState({ members: res.data[0].members});
      
      })
      .catch(err => console.log(err))
  
    axios.get("" + server + "quotes/").then((res) => {
        this.setState({ quote: res.data[0].Home});
        
        })
        .catch(err => console.log(err))
    
    axios.get("" + server + "statistics/").then((res) => {
      this.setState({ statistics: res.data[0].Statistics});
      
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