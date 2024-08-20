import React, { Component } from "react";

const NewsItem =(props)=> {
 
    let {title , description,imageUrl,newsUrl,author,publishedData }=props;

    return (
        <div className="card" style={{width: "18rem"}}>
          <img style={{width:"100%",height:"25vh"}} src={!imageUrl?"https://i.blogs.es/9b7303/halide/840_560.jpeg":imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">
            {description}
            </p>
            <h6 className="card-text">
            {author}   
            </h6>
            <p className="card-text">
            {publishedData}
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sn btn-primary">
              Read More
            </a>
          </div>
        </div>
     
    );
  
}

export default NewsItem;
