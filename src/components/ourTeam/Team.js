import React from 'react'
import { useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectCoverflow,Thumbs , Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TeamItem from './TeamItem';
const Team = () => {
    const [teamActive, setTeamActive]=useState(1);
    const handleTeamActive=(index)=>{
        setTeamActive(index)
    }
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const pagination = {
        clickable: true,
        renderBullet: (index, className) => {
          const texts = [
            "/images/team-1.svg",
            "/images/team-2.svg",
            "/images/team-3.svg",
            "/images/team-4.svg",
          ];
          return `<img src=${texts[index]} class="${className}"/>`;
        },
      };
  return (
    <>
    {/* <div className="team-header-item">
        <div className={teamActive === 1 ? 'team-img active-team-img':"team-img"}
        onClick={()=>handleTeamActive(1)}
        >
            <img src="/images/team-1.svg" alt="" />
        </div>
        <div className={teamActive === 2 ? 'team-img active-team-img':"team-img"}
        onClick={()=>handleTeamActive(2)}
        >
            <img src="/images/team-2.svg" alt="" />
        </div>
        <div className={teamActive === 3 ? 'team-img active-team-img':"team-img"}
        onClick={()=>handleTeamActive(3)}
        >
            <img src="/images/team-3.svg" alt="" />
        </div>
        <div className={teamActive === 4 ? 'team-img active-team-img':"team-img"}
        onClick={()=>handleTeamActive(4)}
        >
            <img src="/images/team-4.svg" alt="" />
        </div>
    </div> */}
    <div className="team-content-item">
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={{
            prevEl:'.prev',
            nextEl:'.next'
        }}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, A11y,  Pagination ]}
        pagination={pagination}
        >
            <SwiperSlide>
                <div className={teamActive ===1 ? 'team-items active-team-items' : 'team-items'}
                >

                <TeamItem title='BlankShy' img='/images/team-img-1.svg' dis='MTV SPACE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={teamActive ===2 ? 'team-items active-team-items' : 'team-items'}
                >
<TeamItem title='BlankShysss' img='/images/team-img-1.svg' dis='MTV SPACE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={teamActive ===3 ? 'team-items active-team-items' : 'team-items'}
                >

<TeamItem title='BlanadsdfkShy' img='/images/team-img-1.svg' dis='MTV SPAasdfasfdfCE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function' />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={teamActive ===4 ? 'team-items active-team-items' : 'team-items'}
                >
                <TeamItem title='BlankSasdfdddhy' img='/images/team-img-1.svg' dis='MTV SPACE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function' />
                </div>
            </SwiperSlide>
            
        </Swiper>

        <div className="slider-nav">
          <div className="prev  grow-arrow-nav">
            <svg
              width="18"
              height="22"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1L1 7.5L8 14"
                stroke="#071727"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="next grow-arrow-nav">
            <svg
              width="18"
              height="22"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 14L8 7.5L1 1"
                stroke="#071727"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
    </div>
    </>
  )
}

export default Team