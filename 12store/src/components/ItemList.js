import { addItem } from "../utils/cartSlice.js";
import { CDN_URL } from "../utils/constants.js";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  //console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="mb-10 mt-0 ml-0 pb-10 pl-0 border-b-2 flex place-content-between"
          >
            <span className="w-3/4">
              <div className=" text-gray-600 font-bold text-lg">
                {item.card.info.name} {item.card.info.isVeg == 1 ? "🟢" : "🔴"}
              </div>
              <div className="font-semibold">₹{item.card.info.price / 100}</div>
              <p className="pt-2 w-3/4 text-gray-500">
                {item.card.info.description}
              </p>
            </span>
            <span className="w-1/4">
              <button
                className="bg-green-200 absolute rounded-sm bg-white text-green-500 font-bold self-center hover:bg-gray-300"
                onClick={() => {handleAddItem(item)}}
              >
                ADD
              </button>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full h-56overflow-hidden rounded-2xl"
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
