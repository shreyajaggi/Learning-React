import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Card from "./Card";
import { Link } from "react-router";
import { filterData } from "../utils/helper";
import useAllRestaurant from "../utils/useAllRestaurant";
import useOnline from "../utils/useOnline";

const Body = () => {
  const allRestaurantList = useAllRestaurant();
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([
    allRestaurantList,
  ]);
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Please check your Internet connection!</h1>;
  }

  if (!allRestaurantList) return null; //Early Return

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder=""
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            if (!searchText) {
              setFilteredRestaurantList(allRestaurantList);
            }
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(allRestaurantList, searchText);
            setFilteredRestaurantList(data);
          }}
        >
          Search
        </button>
      </div>
      {allRestaurantList?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurantList.length === 0 ? (
            <h1>No Restaurant Found</h1>
          ) : searchText ? (
            filteredRestaurantList?.map((restaurant) => {
              return (
                <Link to={"/restaurants/" + restaurant?.info?.id}>
                  <Card
                    key={restaurant?.info?.id}
                    restaurant={restaurant.info}
                  />
                </Link>
              );
            })
          ) : (
            allRestaurantList?.map((restaurant) => {
              return (
                <Link to={"/restaurants/" + restaurant?.info?.id}>
                  <Card
                    key={restaurant?.info?.id}
                    restaurant={restaurant.info}
                  />
                </Link>
              );
            })
          )}
        </div>
      )}
    </>
  );
};

export default Body;
