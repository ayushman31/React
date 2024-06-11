import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showItems , setShowIndex}) => {
  // console.log(data);

  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-full mt-10 shadow-lg p-4 ">
      <div
        className="flex justify-between mb-10 cursor-pointer "
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔻</span>
      </div>
      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
