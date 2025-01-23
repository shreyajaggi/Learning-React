import { useState } from "react";
import { restraunts } from "../config";
import Card from "./Card";

function filterData(restrauntList, searchText) {
  return restrauntList?.filter((res) => res.name.includes(searchText));
}
const Body = () => {
  const [restrauntList, setRestrauntList] = useState(restraunts);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(restrauntList, searchText);
            setRestrauntList(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {restrauntList?.map((restraunt) => {
          return <Card key={restraunt.id} restraunt={restraunt} />;
        })}
      </div>
    </>
  );
};

export default Body;
