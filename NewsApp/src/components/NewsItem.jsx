import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title , description,imageUrl,newsUrl }=this.props;

    return (
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://i.blogs.es/9b7303/halide/840_560.jpeg":imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">
            {description}
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sn btn-primary">
              Read More
            </a>
          </div>
        </div>
     
    );
  }
}

export default NewsItem;
