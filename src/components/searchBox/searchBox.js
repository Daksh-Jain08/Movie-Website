import React from "react";
import "./searchBox.css";
import { useNavigate } from "react-router-dom";

const SearchBox = (props) => {
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && props.searchValue.trim() !== "") {
      e.preventDefault();
      navigate(`/movies/search/${encodeURIComponent(props.searchValue.trim())}`);
    }
  };

  return (
    <div className="header__search">
      <input
        type="text"
        placeholder="Search for Movies..."
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
        onKeyPress={handleKeyPress}
        className="header__searchInput"
      />
      <i className="fas fa-search"></i>
    </div>
  );
};

export default SearchBox;
