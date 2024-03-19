import { useState } from "react";
import Rescard from "./ResCard";
import resList from "../utils/mockData";

const Body = () => {
  //Local State Variable - Super powerful variable
  const [listOfRestraunts, setlistOfRestraunts] = useState(resList)

  

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          //Filter Logic
          const filteredList = listOfRestraunts.filter(res => res.card.card.info.avgRating > 4.1);
          setlistOfRestraunts(filteredList);
          console.log(listOfRestraunts);
        }}>
          Top Rated Restaurants.
        </button>
      </div>

        {/* {console.log(listOfRestraunts)} */}

      <div className="res-container">
        {listOfRestraunts.map((restraunt) => (
          <Rescard
            key={restraunt.card.card.info.id}
            resData={restraunt.card.card.info}
          />
        ))}
        {/* <Rescard resData = {resList[0].card.card.info} /> //instead of writing this big code we can use map method as above.
                <Rescard resData = {resList[1].card.card.info} />
                <Rescard resData = {resList[2].card.card.info} />
                <Rescard resData = {resList[3].card.card.info} />
                <Rescard resData = {resList[4].card.card.info} />
                <Rescard resData = {resList[5].card.card.info} />
                <Rescard resData = {resList[6].card.card.info} /> */}
      </div>
    </div>
  );
};

export default Body;
