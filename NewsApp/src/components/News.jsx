import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container'>
        <h2>SaloSkilo Top-News</h2>

        <div className="row">
          <div className="col md-4">
            <NewsItem title={"myTitle"} description={"myDesc"} imageUrl={'https://images.macrumors.com/t/8HvbMqisozjrhE8YM0x45tE4DDI=/400x400/smart/article-new/2024/08/sonny-iphone-16-pro-colors.jpg'} />

          </div>
          <div className="col md-4">
            <NewsItem title={"myTitle"} description={"myDesc"} />

          </div>
          <div className="col md-4">
            <NewsItem title={"myTitle"} description={"myDesc"} />

          </div>

        </div>


      </div>
    )
  }
}

export default News