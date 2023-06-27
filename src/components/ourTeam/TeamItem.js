import React from "react";

const TeamItem = ({title, img, dis}) => {
  return (
    <>
      <div className="team-item">
        <div className="team-item-left">
          <h1 className="section-title">{title}</h1>
          <p>{dis}</p>
        </div>
        <div className="team-item-right">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default TeamItem;
