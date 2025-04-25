import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Card from "./Card";
import { Link } from "react-router";
import { filterData } from "../utils/helper";
import useAllRestaurant from "../customHooks/useAllRestaurant";
import useOnline from "../customHooks/useOnline";
import UserContext from "../Context/UserContext";

const Body = () => {
  const allRestaurantList = useAllRestaurant();
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([
    allRestaurantList,
  ]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Please check your Internet connection!</h1>;
  }

  if (!allRestaurantList) return null; //Early Return

  return (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="bg-white"
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
          className="p-1 m-2 shadow-md bg-green-800 text-white rounded-xl font-bold hover:bg-amber-50 hover:text-black"
          onClick={() => {
            const data = filterData(allRestaurantList, searchText);
            setFilteredRestaurantList(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) => {
            setUser({ name: e.target.value, email: "newEmail" });
          }}
        ></input>
      </div>
      {allRestaurantList?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap">
          {filteredRestaurantList.length === 0 ? (
            <h1>No Restaurant Found</h1>
          ) : searchText ? (
            filteredRestaurantList?.map((restaurant) => {
              return (
                <Link
                  to={"/restaurants/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
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
                <Link
                  to={"/restaurants/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
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
