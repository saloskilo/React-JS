import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title , description }=this.props;

    return (
        <div className="card" style={{width: "18rem"}}>
          <img src="https://images.macrumors.com/t/8HvbMqisozjrhE8YM0x45tE4DDI=/400x400/smart/article-new/2024/08/sonny-iphone-16-pro-colors.jpg" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">
            {description}
            </p>
            <a href="/about" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
     
    );
  }
}

export default NewsItem;
