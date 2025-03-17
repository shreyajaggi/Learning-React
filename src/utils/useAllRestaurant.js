import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_LIST_URL } from "./constants";

const useAllRestaurant = () => {
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  useEffect(() => {
    //API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const resData = await fetch(FETCH_RESTAURANT_LIST_URL);
    const json = await resData.json();
    const resList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurantList(resList);
  }
  return allRestaurantList;
};

export default useAllRestaurant;
