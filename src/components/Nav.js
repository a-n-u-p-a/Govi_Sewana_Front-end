import React from "react";
import "./styles/nav.css";
import "remixicon/fonts/remixicon.css";
import Image from "./images/profileLogo.jpg";
import Logo from "./images/Logo.jpg";
import Farmer from "./images/Farmer.jpg";

export default function Nav() {
  return (
    <div>
      <nav>
        <div className="nav-content-1">
          <div className="nav-content-1-content-1">
            <i
              class="ri-menu-line"
              style={{ color: "white", marginRight: "10px", marginTop: "5px" }}
            ></i>
          </div>
          <div className="nav-content-1-content-2">
            <img src={Logo} alt="" />
          </div>
          <div className="nav-content-1-content-3">
            <img
              src={Farmer}
              alt=""
              style={{ borderRadius: "50%", height: "75px" }}
            />
          </div>
          <div className="nav-content-1-content-4">
            <p
              style={{
                color: "white",
                fontSize: "12px",
                textAlign: "center",
                fontFamily: "sans-serif",
                marginTop: "5px",
              }}
            >
              Sarath Kumara <br />
              077 423 2115
            </p>
          </div>
        </div>
        <div className="nav-content-2">
          <div className="nav-content-line">
            <div className="top-border"></div>
          </div>
          <div className="nav-content-2-content-1">
            <div className="nav-content-2-image">
              <img
                src={Image}
                style={{ marginLeft: "30px", marginTop: "22px" }}
              />
            </div>
            <div className="nav-content-2-topic">
              <ul>
                <li>
                  <a href="">Profile</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-content-2-content-2">
            <div className="nav-content-2-image">
              <img
                src={Image}
                style={{ marginLeft: "30px", marginTop: "22px" }}
              />
            </div>
            <div className="nav-content-2-topic">
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-content-2-content-3">
            <div className="nav-content-2-image">
              <img
                src={Image}
                style={{ marginLeft: "30px", marginTop: "22px" }}
              />
            </div>
            <div className="nav-content-2-topic">
              <ul>
                <li>
                  <a href="">
                    Yield Prediction <br />& Excess Check
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-content-2-content-4">
            <div className="nav-content-2-image">
              <img
                src={Image}
                style={{ marginLeft: "30px", marginTop: "22px" }}
              />
            </div>
            <div className="nav-content-2-topic">
              <ul>
                <li>
                  <a href="">
                    Crop <br />
                    Recommendation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-content-2-content-5">
            <div className="nav-content-2-image">
              <img
                src={Image}
                style={{ marginLeft: "30px", marginTop: "22px" }}
              />
            </div>
            <div className="nav-content-2-topic">
              <ul>
                <li>
                  <a href="">Price Prediction</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-content-2-content-6">
            <div className="nav-content-2-image">
              <img
                src={Image}
                style={{ marginLeft: "30px", marginTop: "22px" }}
              />
            </div>
            <div className="nav-content-2-topic">
              <ul>
                <li>
                  <a href="">Cultivation Tips</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-content-3">
          <div className="nav-content-line">
            <div className="top-border"></div>
          </div>
          <div className="nav-content-3-content-1">
            <div className="nav-content-3-image">
              <img
                src={Image}
                style={{ marginLeft: "30px", marginTop: "22px" }}
              />
            </div>
            <div className="nav-content-3-topic">
              <ul>
                <li>
                  <a href="">Log out</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-content-3-content-2">
            <div className="nav-content-3-image">
              <img
                src={Image}
                style={{ marginLeft: "30px", marginTop: "22px" }}
              />
            </div>
            <div className="nav-content-3-topic">
              <ul>
                <li>
                  <a href="">Settings</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
