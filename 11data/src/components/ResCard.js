import React from 'react';
import { CDN_URL } from "../utils/constants";

const Rescard = (props) => {
  const { resData } = props;
  // const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla.slaString } = resData?.data;    this destructuring of data didn't work.

  // const styleCard = () => {
  //     backgroundColor : "#f0f0f0"
  // };

  return (
    <div className="card m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-400" >
      <img
        className="res-logo rounded-lg"
        alt="image not found"
        src={
          CDN_URL +
          resData.card.card.info.cloudinaryImageId
        }
      ></img>
      <h3 className='font-bold py-4 text-lg'>{resData.card.card.info.name}</h3>
      <h4>{resData.card.card.info.cuisines.join(" , ")}</h4>
      <h4>{resData.card.card.info.avgRating}⭐</h4>
      <h4>Rs.{resData.card.card.info.costForTwo}</h4>
      <h5>{resData.card.card.info.sla.slaString} ETA</h5>
    </div>
  );
};

// Higher Order Component
// input -  RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div> 
        <label className='absolute bg-black text-white p-2 m-2 ml-4 mt-0 rounded-tl-lg'>Promoted</label>
        <Rescard {...props} />
      </div>
    );
  };
};

export default Rescard;
