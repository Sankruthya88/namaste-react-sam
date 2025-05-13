import { useDispatch } from "react-redux";
import { CDN_URL, ITEM_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();

  const handleAdditem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="font-bold py-2">
              <span>{item?.card?.info?.name}</span>
              <span> - ₹{item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg shadow-lg bg-black text-white"
                onClick={()=>handleAdditem(item)}
              >
                ADD +
              </button>
            </div>
            <img
              className="rounded-lg w-full"
              src={CDN_URL + item?.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
