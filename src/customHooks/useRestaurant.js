import { useState, useEffect } from "react";
import { FETCH_MENU_URL, FETCH_MENU_URL_TWO } from "../utils/constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId + FETCH_MENU_URL_TWO);
    const jsonData = await data.json();
    setRestaurant(jsonData?.data?.cards);
  }
  return restaurant;
};

export default useRestaurant;
