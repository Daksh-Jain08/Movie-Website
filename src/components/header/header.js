import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import SearchBox from "../searchBox/searchBox";

const Header = (props) => {
  const handleClick = () => {
    props.setSearchValue("");
  };

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img className="header__icon" src="/assets/logo.jpeg" alt="logo" />
        </Link>
        <Link
          to="/movies/popular"
          onClick={handleClick}
          style={{ textDecoration: "none" }}
        >
          <span>Popular</span>
        </Link>
        <Link
          to="/movies/top_rated"
          onClick={handleClick}
          style={{ textDecoration: "none" }}
        >
          <span>Top Rated</span>
        </Link>
        <Link
          to="/movies/upcoming"
          onClick={handleClick}
          style={{ textDecoration: "none" }}
        >
          <span>Upcoming</span>
        </Link>
        <Link
          to="/movies/favourites"
          onClick={handleClick}
          style={{ textDecoration: "none" }}
        >
          <span>Favourites</span>
        </Link>
      </div>
      <div className="header__right">
        <SearchBox
          searchValue={props.searchValue}
          setSearchValue={props.setSearchValue}
        />
      </div>
    </div>
  );
};

export default Header;
