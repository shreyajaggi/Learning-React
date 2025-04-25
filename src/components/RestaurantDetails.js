import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../customHooks/useRestaurant";
import { addItem, removeItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantDetails = () => {
  //how to read a dynamic URL params
  //always create hooks with use in front of the name
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  const resDetails = restaurant[2]?.card?.card?.info;
  const dispatch = useDispatch();
  const handleAddItem = (listItem) => {
    dispatch(addItem(listItem));
  };
  const handleRemoveItem = (listItem) => {
    dispatch(removeItem(listItem));
  };

  return (
    <>
      {Object.values(restaurant).length == 0 ? (
        <Shimmer />
      ) : (
        <div className="m-10 p-5">
          <h1>Restaurant Id: {resDetails?.id}</h1>
          <img
            className="w-50 p-5 m-5"
            src={IMG_CDN_URL + resDetails?.cloudinaryImageId}
          ></img>
          <h1 className="font-bold p-5 m-5">{resDetails?.name}</h1>
          <div className="pl-5 ml-5">
            <h1 className="font-medium">Menu</h1>
            <ul>
              {restaurant[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
                (menuItem) => {
                  const listItem = menuItem?.card?.info?.name;
                  return (
                    <li>
                      {listItem}
                      <button
                        className="m-2 p-2 bg-green-600 rounded-2xl h-10 w-20 text-sm hover:bg-green-200"
                        onClick={() => handleAddItem(menuItem?.card?.info)}
                      >
                        Add
                      </button>
                      <button
                        className="m-2 p-2 bg-green-600 rounded-2xl h-10 w-20 text-sm hover:bg-green-200"
                        onClick={() => handleRemoveItem(menuItem?.card?.info)}
                      >
                        Remove
                      </button>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default RestaurantDetails;
