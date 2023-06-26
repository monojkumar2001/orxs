import React, { useState } from "react";

import { Link } from "react-router-dom";
import Marque from "./marque/Marquee";
import RoadmapImages from "./roadmap/RoadmapImages";
import RoadmapNumber from "./roadmap/RoadmapNumber";
import RoadmapContent from "./roadmap/RoadmapContent";
import RoadmapItem from "./roadmap/RoadmapItem";
import SwiperItem from "./swiper/SwiperItem";
import CheckItItem from "./checkITItem/CheckItItem";

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
            <div className="nav-list mint-now-btn">
                <Link
                  to="/white-paper"
                  className="nav-link"
                >
                  <img src="images/mint-bg-img.svg" alt="" />
                  <span>MINT NOW</span>
                </Link>
              </div>
          </div>
        </div>
        {/* <div className="hero-cloud-1"><img src="images/cloud-1.svg" alt="" /></div>
        <div className="hero-cloud-2"><img src="images/cloud-2.svg" alt="" /></div>
        <div className="hero-cloud-3"><img src="images/cloud-3.svg" alt="" /></div> */}
        <div className="hero-bottom-img">
          <img src="images/hero-bottom-img.svg" alt="" />
        </div>
      </div>
      {/* =================== Hero Section End =================== */}
      {/* ===================== Marque Slider Start =============== */}
      <section className="marque cpt-7 cpb-6 ">
        <div className="marque-wrapper">
          <Marque/>
        </div>
      </section>
      {/* ===================== Marque Slider End   =============== */}
      {/* ================== About Section Start ================== */}
      <section id="about" className="about cpb-6">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-header-content">
              <h1 className="section-title">ABOUT <span>US</span></h1>
              <p>MTV SPACE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function on the Ethereum blockchain. These space-fairing NFTs will initially be.</p>
            </div>
            <div className="about-content row cpt-7">
            <div className="col-lg-4 col-md-6 col-sm-12"  >
            <div className="about-list-item">
              <h3>PUBLIC SALE PRICE</h3>
              <span>TBA</span>
            </div>
          </div>
            <div className="col-lg-4 col-md-6 col-sm-12"  >
            <div className="about-list-item">
              <h3>PRESALE PRICE</h3>
              <span>TBA</span>
            </div>
          </div>
            <div className="col-lg-4 col-md-6 col-sm-12"  >
            <div className="about-list-item">
              <h3>TOTAL SUPPLY</h3>
              <span>11,111</span>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================== About Section End ================== */}
      {/* ================== Roadmap Section Start ================== */}
      <section id="roadmap" className="roadmap cpb-6">
        <div className="container">
          <div className="roadmap-wrapper">
            <h1 className="section-title">
              ROADMAP
            </h1>
            <div className="roadmap-content">
          <RoadmapItem img='images/roadmap-1.svg' num='01' title='Launch Twitter page' dis='Partner with chosen charity One Tree Planted' year='2023' />
          <RoadmapItem img='images/roadmap-2.svg' num='02' title='Finalise collection' dis='10,000 tree fund target started' year='2023' />
          <RoadmapItem img='images/roadmap-3.svg' num='03' title='Minting goes live' dis='' year='2023' />
          <RoadmapItem img='images/roadmap-4.svg' num='04' title='10,000 trees planted!' dis='' year='2024' />
          <RoadmapItem img='images/roadmap-5.svg' num='05' title='Merch goes live' dis='' year='2024' />
            </div>
          </div>
        </div>
      </section>
      {/* ================== Roadmap Section End ================== */}
      {/* ========================== Swiper Start ======================== */}
      <section className="swiper cpb-6">
        <div className="container">
          <div className="swiper-wrappers">
          <SwiperItem/>
          </div>
        </div>
      </section>
      {/* ========================== Swiper End ========================== */}

      {/* =================== Card Items Start  ============ */}
      <section className="check-it">
        <div className="container">
          <div className="check-it-wrapper row">
          <CheckItItem/>
          </div>
        </div>
      </section>
      {/* =================== Card Items End ============ */}
    </React.Fragment>
  );
}

export default Home;



