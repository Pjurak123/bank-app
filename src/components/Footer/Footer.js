import React from "react";
import "../Footer/Footer.css";
import facebook from "../../images/icon-facebook.svg";
import youtube from "../../images/icon-youtube.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";
import { Logo } from "./Logo";
import { SocialIcons } from "./SocialIcons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div className="grid-item1">
          <Logo className="logo-image" />
          <div className="social-media-container">
            <SocialIcons />
          </div>
        </div>
        <div className="grid-item1">
          <div className="footer-service">
            <ul className="footer-list">
              <li className="footer-item">About Us</li>
              <li className="footer-item">Contact</li>
              <li className="footer-item">Blog</li>
            </ul>
            <ul className="footer-list">
              <li className="footer-item">Careers</li>
              <li className="footer-item">Support</li>
              <li className="footer-item">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="grid-item2">
          <button className="footer-button">Request Invite</button>
          <p className="footer-author">© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
