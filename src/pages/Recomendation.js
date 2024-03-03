import React from "react";
import Nav from "../Components/Nav.js";
import "./Recomendation.css";
import Footer from "../Components/Footer.js";
import potato from "../Components/images/potato.jpg";
import Carrot from "../Components/images/Carrot.jpg";
import Beetroot from "../Components/images/Beetroot.jpg";

export default function Home() {
  return (
    <div>
      <div className="container">
        <Nav></Nav>

        <div className="Recomendation-content">
          <div className="Recommendation-content-1">
            <div className="Recommendation-content-1-h1">
              <h1 style={{ letterSpacing: "5px" }}>
                Recommended <br />
                Crops for your Cultivation
              </h1>
              <div className="line"></div>
            </div>
          </div>
          <div className="Recomendation-content-2-box"></div>
          <div className="Recomendation-content-2">
            <div className="Recomendation-content-2-content">
              <div className="Recomendation-content-2-content-1">
                <div className="box-image">
                  <img src={potato} alt="" />
                </div>
                <div className="name">
                  <h3>Potato</h3>
                  <div className="name-line"></div>
                </div>
                <div className="description">
                  <div className="description-1">
                    <p>Market Demand :- 100kg</p>
                  </div>
                  <div className="description-2">
                    <p>Market Demand :- 100kg</p>
                  </div>
                  <div className="description-3">
                    <p>Market Demand :- 100kg</p>
                  </div>
                </div>
                <div className="button">
                  <button>Select The Crop</button>
                </div>
              </div>
              <div className="Recomendation-content-2-content-2">
                <div className="box-image">
                  <img src={Carrot} alt="" />
                </div>
                <div className="name">
                  <h3>Carrot</h3>
                  <div className="name-line"></div>
                </div>
                <div className="description">
                  <div className="description-1">
                    <p>Market Demand :- 100kg</p>
                  </div>
                  <div className="description-2">
                    <p>Market Demand :- 100kg</p>
                  </div>
                  <div className="description-3">
                    <p>Market Demand :- 100kg</p>
                  </div>
                </div>
                <div className="button">
                  <button>Select The Crop</button>
                </div>
              </div>
              <div className="Recomendation-content-2-content-3">
                <div className="box-image">
                  <img src={Beetroot} alt="" />
                </div>
                <div className="name">
                  <h3>Beetroot</h3>
                  <div className="name-line"></div>
                </div>
                <div className="description">
                  <div className="description-1">
                    <p>Market Demand :- 100kg</p>
                  </div>
                  <div className="description-2">
                    <p>Market Demand :- 100kg</p>
                  </div>
                  <div className="description-3">
                    <p>Market Demand :- 100kg</p>
                  </div>
                </div>
                <div className="button">
                  <button>Select The Crop</button>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
