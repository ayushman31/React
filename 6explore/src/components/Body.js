import { useEffect, useState } from "react";
import Rescard from "./ResCard";
import Shimmer from "./Shimmer";
//import resList from "../utils/mockData";

const Body = () => {
  //Local State Variable - Super powerful variable
  const [listOfRestraunts, setlistOfRestraunts] = useState([]); //we have put an empty array inside useState bcoz we want nothing initially and after the api gets called we want the result.
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);

  const [searchText, setSearchText] = useState("");
  
  //Whenever state variables update, react triggers a reconciliation cycle (re-renders the component).
  console.log("Body Renders");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=83644&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();

    console.log(json);
    setlistOfRestraunts(json?.data?.cards.slice(3)); //optional chaining
    setFilteredRestraunt(json?.data?.cards.slice(3)); 
  };

  //Conditional Rendering
  // if(listOfRestraunts.length === 0){
  //   return <Shimmer />
  // }

  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);

              const filteredRestraunt = listOfRestraunts.filter((res)=> res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));

              filteredRestraunt.length ===0 ? console.log("NO RESULT FOUND") : setFilteredRestraunt(filteredRestraunt);
            }}
          >
            {" "}
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic
            const filteredList = listOfRestraunts.filter(
              (res) => res.card.card.info.avgRating > 4.2
            );
            setFilteredRestraunt(filteredList); //instead of setFilteredRestraunt if we write setListofRestraunts why is not working ?
            //console.log(listOfRestraunts);
          }}
        >
          Top Rated Restaurants.
        </button>
      </div>

      {/* {console.log(listOfRestraunts)} */}

      <div className="res-container">
        {filteredRestraunt.map((restraunt) => (
          <Rescard key={restraunt.card.card.info.id} resData={restraunt} />
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
