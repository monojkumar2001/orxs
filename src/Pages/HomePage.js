import React, { useState, Suspense } from "react";
import RoadmapItem from "../components/roadmap/RoadmapItem";
import Team from "../components/ourTeam/Team";
import FaqQuestion from "../components/faq/FaqQuestion";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorBoundary";

const Intro = React.lazy(() => import("../components/Intro/Intro"));
const Marque = React.lazy(() => import("../components/marque/Marquee"));
const About = React.lazy(() => import("../components/about/About"));
const SwiperItem = React.lazy(() => import("../components/swiper/SwiperItem"));
const CheckItItem = React.lazy(() =>
  import("../components/checkITItem/CheckItItem")
);

function Home() {
  return (
    <React.Fragment>
      {/* =================== Hero Section Start =================== */}
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense fallback={<div>Loading...</div>}>
          <Intro />
        </Suspense>
      </ErrorBoundary>
      {/* =================== Hero Section End =================== */}

      {/* ===================== Marque Slider Start =============== */}
      <section className="marque cpb-6 ">
        <div className="marque-wrapper">
          <Suspense fallback={<div>Loading...</div>}>
            <Marque />
          </Suspense>
        </div>
      </section>
      {/* ===================== Marque Slider End   =============== */}

      {/* ================== About Section Start ================== */}

      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
      {/* ================== About Section End ================== */}

      {/* ================== Roadmap Section Start ================== */}
      <section
        id="roadmap"
        className="roadmap cpt-7 cpb-6"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
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
      <section
        className="swiper cpb-6"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="container">
          <div className="swiper-wrappers">
            <Suspense fallback={<div>Loading...</div>}>
              <SwiperItem />
            </Suspense>
          </div>
        </div>
      </section>
      {/* ========================== Swiper End ========================== */}

      {/* =================== Card Items Start  ============ */}
      <section className="check-it" data-aos="fade-up" data-aos-duration="2000">
        <div className="container">
          <div className="check-it-wrapper row">
            <Suspense fallback={<div>Loading...</div>}>
              <CheckItItem />
            </Suspense>
          </div>
        </div>
      </section>
      {/* =================== Card Items End ============ */}

      {/* ====================== Our Team Start ======================== */}
      <section
        id="team"
        className="team cpb-6"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
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
      <section
        className="marque  cpb-6  marquess"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="marque-wrapper">
          <Suspense fallback={<div>Loading...</div>}>
            <Marque />
          </Suspense>
        </div>
      </section>
      {/* ===================== Marque Slider End   =============== */}

      {/* ================== FAQ Start ======================= */}
      <section
        id="faq "
        className="faq cpb-6"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
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
      <section
        id="join-community"
        className="join-community cpb-6"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
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
