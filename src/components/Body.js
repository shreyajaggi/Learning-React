import { useEffect, useState } from "react";
//import { restaurants } from "../utils/config";
import Shimmer from "./Shimmer";
import Card from "./Card";
import { Link } from "react-router";

function filterData(restaurantList, searchText) {
  return restaurantList?.filter((res) =>
    res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const resData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9097506&lng=77.6486011&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await resData.json();
    //console.log(json.data.cards[1].card.card.gridElements?.infoWithStyle);
    const resList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurantList(resList);
    setFilteredRestaurantList(resList);
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
