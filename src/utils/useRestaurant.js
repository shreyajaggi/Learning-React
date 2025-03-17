import { useState, useEffect } from "react";
import { FETCH_MENU_URL, FETCH_MENU_URL_TWO } from "./constants";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId + FETCH_MENU_URL_TWO);
    const jsonData = await data.json();
    setRestaurant(jsonData.data.cards[2].card.card.info);
    console.log(jsonData.data);
  }
  return restaurant;
};

export default useRestaurant;
