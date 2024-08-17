import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title , description,imageUrl }=this.props;

    return (
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="" />
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
