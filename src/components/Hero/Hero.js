import React from "react";
import backgroundImg from "../../images/bg-intro-mobile.svg";
import phoneImg from "../../images/image-mockups.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="row">
        <div className="image-container">
          <img src={backgroundImg} alt="bg-img" className="bg-image" />
          <img src={phoneImg} alt="phone-img" className="phone-image" />
        </div>
        <div className="text-container">
          <h1 className="title">Next generation digital banking</h1>
          <p className="text">
            Take your financial life online. Your Easybank account will be a
            one-stop shop for spending, saving, budgeting, investing and much
            more.
          </p>
          <button className="hero-button">Request Invite</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
