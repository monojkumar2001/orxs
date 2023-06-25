import React, { useState } from "react";

import { Link } from "react-router-dom";

function Home() {
 
  return (
    <React.Fragment>
      {/* =================== Hero Section Start =================== */}
      <div className="hero">
        <div className="container">
          <div className="hero-wrapper">
            <h1 className="section-title hero-title">           
            GET YOUR TOP NFT <span>WEBSITE HERE</span>
            </h1>
            <div className="hero-img">
              <img src="images/hero-img.gif" alt="" />
            </div>
            {/* <div className="nav-list mint-now-btn">
                <Link
                  to="/white-paper"
                  className="nav-link"
                >
                  <img src="images/mint-bg-img.svg" alt="" />
                  <span>MINT NOW</span>
                </Link>
              </div> */}
          </div>
        </div>
        <div className="hero-bottom-img">
          <img src="images/hero-bottom-img.svg" alt="" />
        </div>
      </div>
      {/* =================== Hero Section End =================== */}
      {/* ================== About Section Start ================== */}
      {/* ================== About Section End ================== */}
    </React.Fragment>
  );
}

export default Home;


