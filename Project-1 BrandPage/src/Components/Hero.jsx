import React from "react";

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-content">
        <h1>YOUR FOOT DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button className="secondary_btn">Category</button>
        </div>
        <div className="shopping">
            also avalaible on
        </div>
        <div className="brand-icons">
            <img src="/Images/amazon.png" alt="amazon-logo" />
            <img src="/Images/flipkart.png" alt="amazon-logo" />
        </div>
      </div>
      <div className="hero-image">
        <img src="/Images/shoe_image.png" alt="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
