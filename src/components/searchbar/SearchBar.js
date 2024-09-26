import React, { useState, useContext } from "react";
import searchIcon from "../../images/search_icon.svg";
import "./searchbar.css";
import { weatherContext } from "../../App";

function SearchBar() {
  const { searchInput, setSearchInput } = useContext(weatherContext);
  const [localSearchInput, setLocalSearchInput] = useState(searchInput);

  const handleInputChange = (e) => {
    setLocalSearchInput(e.target.value);
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      setSearchInput(localSearchInput);
    }
  };

  const handleSearchButtonClick = () => {
    setSearchInput(localSearchInput);
  };
  return (
    <div className="searchContainer">
      <button className="searchButton" onClick={handleSearchButtonClick}>
        <img src={searchIcon} className="searchIcon" alt="search icon"></img>
      </button>
      <input
        className="searchInput"
        placeholder="Location here"
        value={localSearchInput}
        onChange={handleInputChange}
        onKeyDown={handleKeypress}
      ></input>
    </div>
  );
}

export default SearchBar;
