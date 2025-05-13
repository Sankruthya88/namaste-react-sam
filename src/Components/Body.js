import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const {loggedInUser, setUserName} = useContext(UserContext);

  console.log("renders", listofRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.346515&lng=78.551006&collection=80377&tags=layout_BAU_Contextual%2Cpoori&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();

    setListofRestaurants(
      json?.data?.cards
        ?.filter(
          (card) =>
            card?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
        ?.map((card) => card?.card?.card)
    );
    setFilteredRestaurants(
      json?.data?.cards
        ?.filter(
          (card) =>
            card?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
        ?.map((card) => card?.card?.card)
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return (
      <h1>
        Looks like something went wrong!!! Please check your network connection
      </h1>
    );

  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container  ">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid"
            placeholder="Enter here"
            id="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="bg-green-100 px-4 py-2 m-4 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredRes = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="bg-green-100 py-2 px-4 m-4 rounded-lg cursor-pointer"
            onClick={() => {
              //Filter logic here
              const filteredList = listofRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top rated Restaurant
          </button>
        </div>
        <div className="input m-4 p-4 flex items-center">
              <label>Username: </label>
              <input type="text" value={loggedInUser} className="border border-black p-1" onChange={(e)=>{setUserName(e.target.value)}}/>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? <RestaurantCardPromoted  resData={restaurant}/>  :
            <RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
