import React from 'react';
import { CDN_URL } from "../utils/constants";

const Rescard = (props) => {
  const { resData } = props;
  // const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla.slaString } = resData?.data;    this destructuring of data didn't work.

  // const styleCard = () => {
  //     backgroundColor : "#f0f0f0"
  // };

  return (
    <div className="card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="image not found"
        src={
          CDN_URL +
          resData.card.card.info.cloudinaryImageId
        }
      ></img>
      <h3>{resData.card.card.info.name}</h3>
      <h4>{resData.card.card.info.cuisines.join(" , ")}</h4>
      <h4>{resData.card.card.info.avgRating}⭐</h4>
      <h4>Rs.{resData.card.card.info.costForTwo}</h4>
      <h5>{resData.card.card.info.sla.slaString} ETA</h5>
    </div>
  );
};

export default Rescard;
