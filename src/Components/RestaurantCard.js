import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const {loggedInUser} = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100  hover:scale-110">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="cuisine">{cuisines.join(", ")}</h4>
      <h4 className="rating">{avgRating} stars</h4>
      <h4 className="delivery-time">Delivery in {sla?.slaString}</h4>
      <h4 className="rating">{costForTwo}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-400 text-white m-1 p-1 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
