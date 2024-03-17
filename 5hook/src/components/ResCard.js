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
          resData.cloudinaryImageId
        }
      ></img>
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(" , ")}</h4>
      <h4>{resData.avgRating}⭐</h4>
      <h4>Rs.{resData.costForTwo}</h4>
      <h5>{resData.sla.slaString} ETA</h5>
    </div>
  );
};

export default Rescard;
