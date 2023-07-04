import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TeamItem from './TeamItem';
const Team = () => {
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
    <div className="team-content-item">
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={{
            prevEl:'.prev',
            nextEl:'.next'
        }}
        modules={[Navigation, A11y,  Pagination ]}
        pagination={pagination}
        >
            <SwiperSlide>
            <TeamItem title='BlankShy' img='/images/team-img-1.svg' dis='MTV SPACE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function' />
            </SwiperSlide>
            <SwiperSlide>
            <TeamItem title='BlankShysss' img='/images/team-img-2.svg' dis='MTV SPACE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function' />
            </SwiperSlide>
            <SwiperSlide>
            <TeamItem title='BlanadsdfkShy' img='/images/team-img-3.svg' dis='MTV SPAasdfasfdfCE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function' />
            </SwiperSlide>
            <SwiperSlide>
            <TeamItem title='BlankSasdf dddhy' img='/images/team-img-4.svg' dis='MTV SPACE APE is a revolutionary collection of 10,000 mutated astronaut NFTs. Space Cadets will be deployed and function' />
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