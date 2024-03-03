import React from "react";
import "./styles/footer.css";
import "remixicon/fonts/remixicon.css";
import Image from "./images/footer_logo.jpg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content-1">
        <div className="footer-content-1-content-1">
          <img
            src={Image}
            alt=""
            style={{ height: "50px", marginLeft: "30px" }}
          ></img>
          <h1>GoviSewana</h1>
        </div>
        <div className="footer-content-1-content-2">
          <div className="location">
            <i class="ri-map-pin-fill"></i>
            <p style={{ marginLeft: "10px" }}>
              345 Faulconer Drive, Suite 4 • Bambalapitiya, Sri Lanka
            </p>
          </div>
          <div className="contact">
            <i class="ri-phone-fill"></i>
            <p style={{ marginLeft: "10px" }}>+94 766 760 760</p>
          </div>
        </div>
        <div className="footer-content-1-content-3">
          <div className="social-media">
            <p>Social media:</p>
            <i class="ri-facebook-box-fill"></i>
            <i class="ri-linkedin-fill"></i>
            <i class="ri-youtube-fill"></i>
          </div>
          <div className="email">
            <p>Email Us:</p>
            <p style={{ marginLeft: "45px" }}>support.govisewana@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="footer-content-2">
        <div className="line-1"></div>
        <div className="footer-content-2-content">
          <div className="list">
            <ul>
              <li>
                <a href="">ABOUT US</a>
              </li>
              <li>
                <a href="">CONTACT US</a>
              </li>
              <li>
                <a href="">HEALTH</a>
              </li>
              <li>
                <a href="">PRIMARY POLICIE</a>
              </li>
              <li>
                <a href="">DISCLAIMER</a>
              </li>
            </ul>
          </div>
          <div className="copyright">
            <p>Copyright © 2023 . GoviSewana.ltd</p>
          </div>
        </div>
      </div>
    </div>
  );
}
