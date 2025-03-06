import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  //how to read a dynamic url
  const params = useParams();
  const { resId } = params;
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9097506&lng=77.6486011&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();
    setRestaurant(jsonData.data.cards[2].card.card.info);
    console.log(jsonData.data);
  }
  return (
    <>
      {Object.values(restaurant).length == 0 ? (
        <Shimmer />
      ) : (
        <div>
          <h1>Restaurant Id: {restaurant?.id}</h1>
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
          <h1>{restaurant?.name}</h1>
          <h1>{restaurant?.areaName}</h1>
          <h1>{restaurant?.costForTwoMessage}</h1>
          <h1>{restaurant?.avgRating}</h1>
        </div>
      )}
    </>
  );
};
export default RestaurantDetails;
