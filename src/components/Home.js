import React, { useState } from "react";

import { Link } from "react-router-dom";
import Marque from "./marque/Marquee";
import RoadmapItem from "./roadmap/RoadmapItem";
import SwiperItem from "./swiper/SwiperItem";
import CheckItItem from "./checkITItem/CheckItItem";
import Team from "./ourTeam/Team";
import FaqQuestion from "./faq/FaqQuestion";

function Home() {
  return (
    <React.Fragment>
      {/* =================== Hero Section Start =================== */}
      <div className="hero">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-content">
              <h1 className="section-title">
                The Orxs <span>Road to Redemption.</span>
              </h1>
              <div className="nav-list mint-now-btn">
                <Link to="/mint" className="nav-link">
                  <img src="images/mint-bg-img.svg" alt="" />
                  <span>MINT NOW</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom-img">
          <img src="images/hero-bottom-img.svg" alt="" />
        </div>
        <div className="hero-bottom-img2">
          <img src="images/hero-bg-img-2.svg" alt="" />
        </div>
      </div>
      {/* =================== Hero Section End =================== */}

      {/* ===================== Marque Slider Start =============== */}
      <section className="marque cpb-6 ">
        <div className="marque-wrapper">
          <Marque />
        </div>
      </section>
      {/* ===================== Marque Slider End   =============== */}

      {/* ================== About Section Start ================== */}
      <section id="about" className="about cpb-6 cpt-7">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-header-content">
              <h1 className="section-title">
                ABOUT <span>US</span>
              </h1>
              <p>
                Their realm was one of war and destruction, ravaged by The Orxs.
                These wretched beasts consumed everything and anything in their
                path! Centuries of mass destruction, utter consumption and sheer
                greed, left the lands bare, sparse and baron! The Orxs, born
                with a mission instilled in them to demolish vegetation and
                natural resources; the fear of these gruesome beasts, rebounded
                throughout the realms.
              </p>
              <p>
                Storming through the Hell Fire mountains, The Orxs, stumbled
                across an unusual source of light. It wasn’t the usual red flame
                but a peculiar green beacon. The Orxs, could only do what they
                do best, to take what wasn’t theirs. Unbeknown to them, this was
                a portal and it transported their souls to The Metaverse.
              </p>
              <p>
                Once transported their souls were cleansed, no longer did these
                creatures want to be hated, or to destroy nature. The Orxs
                wanted to put right their wrongs and give back to the Earth,
                from which they were born. They wished to restore the Worlds
                faith in their race. To redeem and revive is now their mission!.
              </p>
              <p>Are you willing to help them to repair this Earth?</p>
            </div>
            <div className="about-content row cpt-7">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="about-list-item">
                  <h3>PUBLIC SALE PRICE</h3>
                  <span>TBA</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="about-list-item">
                  <h3>PRESALE PRICE</h3>
                  <span>TBA</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
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
      <section id="roadmap" className="roadmap cpt-7 cpb-6">
        <div className="container">
          <div className="roadmap-wrapper">
            <h1 className="section-title">ROADMAP</h1>
            <div className="roadmap-content">
              <RoadmapItem
                img="images/roadmap-1.svg"
                num="01"
                title="Launch Twitter page"
                dis="Partner with chosen charity One Tree Planted"
                year="2023"
              />
              <RoadmapItem
                img="images/roadmap-2.svg"
                num="02"
                title="Finalise collection"
                dis="10,000 tree fund target started"
                year="2023"
              />
              <RoadmapItem
                img="images/roadmap-3.svg"
                num="03"
                title="Minting goes live"
                dis=""
                year="2023"
              />
              <RoadmapItem
                img="images/roadmap-4.svg"
                num="04"
                title="10,000 trees planted!"
                dis=""
                year="2024"
              />
              <RoadmapItem
                img="images/roadmap-5.svg"
                num="05"
                title="Merch goes live"
                dis=""
                year="2024"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ================== Roadmap Section End ================== */}

      {/* ========================== Swiper Start ======================== */}
      <section className="swiper cpb-6">
        <div className="container">
          <div className="swiper-wrappers">
            <SwiperItem />
          </div>
        </div>
      </section>
      {/* ========================== Swiper End ========================== */}

      {/* =================== Card Items Start  ============ */}
      <section className="check-it">
        <div className="container">
          <div className="check-it-wrapper row">
            <CheckItItem />
          </div>
        </div>
      </section>
      {/* =================== Card Items End ============ */}

      {/* ====================== Our Team Start ======================== */}
      <section id="team" className="team cpb-6">
        <div className="container">
          <div className="team-wrapper">
            <h1 className="section-title">OUR TEAM</h1>
            <div className="team-content">
              <Team />
            </div>
          </div>
        </div>
      </section>
      {/* ====================== Our Team End ======================== */}

      {/* ===================== Marque Slider Start =============== */}
      <section className="marque  cpb-6  marquess">
        <div className="marque-wrapper">
          <Marque />
        </div>
      </section>
      {/* ===================== Marque Slider End   =============== */}

      {/* ================== FAQ Start ======================= */}
      <section id="faq " className="faq cpb-6">
        <div className="container">
          <div className="faq-wrapper">
            <h1 className="section-title">
              FREQUENTLY ASKED
              <span> QUESTIONS</span>
            </h1>
          </div>
          <div className="faq-content  cpt-6">
            <FaqQuestion />
          </div>
        </div>
      </section>
      {/* ================== FAQ End ======================= */}
      {/* =============== Join Community Start ===================== */}
      <section id="join-community" className="join-community cpb-6">
        <div className="container">
          <div className="join-community-wrapper">
            <div className="join-community-content  d-flex align-items-center justify-content-center flex-column w-60">
              <h1 className="section-title">JOIN OUR COMMUNITY</h1>
              <button className="discord-btn">
                <img
                  className="discord-btn-bg-img"
                  src="/images/discord-btn-bg.svg"
                  alt=""
                />
                <div className="discord-content">
                  <img
                    className="discord-img-icons"
                    src="/images/discord-icon.svg"
                    alt=""
                  />
                  <span>DISCORD</span>
                </div>
              </button>
            </div>
            <div className="discord-img">
              <img src="/images/discord-img.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* =============== Join Community End ===================== */}
    </React.Fragment>
  );
}

export default Home;
