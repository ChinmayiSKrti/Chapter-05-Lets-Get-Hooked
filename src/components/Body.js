import { restaurantList } from "../constants";
import RestaurantCards from "./RestaurantCard";
import { useState } from "react";

const filterData = (searchText, restaurants) => {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filteredData;
};
const Body = () => {
  //searchText is a local state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurant] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCards {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
