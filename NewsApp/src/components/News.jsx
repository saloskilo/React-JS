import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
        <div className='container'>
      <h2>SaloSkilo Top-News</h2>
      <div className="row">
        <div className="col md-4">
        <NewsItem title={"myTitle"} description={"myDesc"}/>

        </div>
        <div className="col md-4">
        <NewsItem title={"myTitle"} description={"myDesc"}/>

        </div>
        <div className="col md-4">
        <NewsItem title={"myTitle"} description={"myDesc"}/>

        </div>

      </div>
      

      </div>
    )
  }
}

export default News