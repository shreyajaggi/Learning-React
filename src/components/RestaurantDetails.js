import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantDetails = () => {
  //how to read a dynamic URL params
  //always create hooks with use in front of the name
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

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
