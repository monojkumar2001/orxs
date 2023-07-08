import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Intro = () => {
  return (
    <>
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
        <LazyLoadImage
      alt="Image"
      height='auto'
      src="images/hero-bottom-img.svg"
      width='auto' />
        </div>
        <div className="hero-bottom-img2">
          <img src="images/hero-bg-img-2.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Intro;
