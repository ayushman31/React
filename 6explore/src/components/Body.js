import { useEffect, useState } from "react";
import Rescard from "./ResCard";
import Shimmer from "./Shimmer";
//import resList from "../utils/mockData";

const Body = () => {
  //Local State Variable - Super powerful variable
  const [listOfRestraunts, setlistOfRestraunts] = useState([]);//we have put an empty array inside useState bcoz we want nothing initially and after the api gets called we want the result.

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=83674&tags=layout_CCS_Shakes&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();

    console.log(json);
    setlistOfRestraunts(json?.data?.cards.slice(3)); //optional chaining
    
  };


  //Conditional Rendering
  // if(listOfRestraunts.length === 0){
  //   return <Shimmer />
  // }

  return listOfRestraunts.length === 0 ? <Shimmer /> :(
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic
            const filteredList = listOfRestraunts.filter(
              (res) => res.card.card.info.avgRating > 4.2
            );
            setlistOfRestraunts(filteredList);
            //console.log(listOfRestraunts);
          }}
        >
          Top Rated Restaurants.
        </button>
      </div>

      {/* {console.log(listOfRestraunts)} */}

      <div className="res-container">
        {listOfRestraunts.map((restraunt) => (
          <Rescard
            key={restraunt.card.card.info.id}
            resData={restraunt}
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
