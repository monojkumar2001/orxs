import React from "react";

const RoadmapItem = ({ img, title, num, dis, year }) => {
  return (
    <>
      <div className="roadmap-content-item roadmap-content-item-reverse">
        <div className="roadmap-img">
          <img src={img} alt="" />
        </div>
      <div className="road-num">
      <div className="roadmap-number">
          <p>{num}</p>
        </div>
      </div>
        <div className="roadmap-text-content">
          <div className="number-wrapper">
            <div className="num-count">
            <span>{num}</span>
            </div>
            <h3>{year}</h3>
          </div>
          <h2>{title}</h2>
          <p>{dis}</p>
        </div>
      </div>
    </>
  );
};

export default RoadmapItem;
