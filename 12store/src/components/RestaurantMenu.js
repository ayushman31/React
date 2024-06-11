import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestrauntMenu(resId);

  //console.log(resId);

  const [showIndex , setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //console.log(itemCards);
  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories);

  return (
    <div className=" mx-80 mt-10">
      <h1 className="font-bold text-2xl ">{name}</h1>
      <h2 className="text-gray-600">{cuisines.join(", ")}</h2>
      {/* <h3>Menu:</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul> */}

      {/* categories accordian */}
      {categories.map((category , index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={ index == showIndex ? true : false}
          setShowIndex = {() => showIndex == index ? setShowIndex(null) : setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
