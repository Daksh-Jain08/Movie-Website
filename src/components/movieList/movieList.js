import React, { useEffect, useState } from "react";
import "./movieList.css";
import Cards from "../card/card";
import { useParams, useLocation } from "react-router-dom";
import api from "../api";
import AddFavourite from "../addFavourite/addFavourite";

const MovieList = (props) => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const [error, setError] = useState(null);
  const pathname = useLocation().pathname;

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  useEffect(() => {
    if (pathname === "/movies/favourites") {
      setMovieList(props.favourites);
    }
  }, [props.favourites]);

  useEffect(() => {
    if (props.searchValue !== "") {
      console.log("searching");
      searchMovie();
    } else if (pathname === "/movies/favourites") {
      setMovieList(props.favourites);
    } else {
      getData();
    }
  }, [props.searchValue]);

  const getData = async () => {
    setError(null);
    try {
      const response = await api.get(`/movie/${type ? type : "popular"}`, {
        params: {
          page: 1,
        },
      });
      const data = await response.data;
      setMovieList(data.results);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  const searchMovie = async () => {
    setError(null);
    try {
      const response = await api.get(`/search/movie`, {
        params: {
          query: props.searchValue,
          page: 1,
          include_adult: false,
        },
      });
      const data = await response.data;
      setMovieList(data.results);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  const heading = () => {
    if (props.searchValue !== "") {
      return "Search for '" + props.searchValue + "'";
    } else {
      return (type ? type : "POPULAR").toUpperCase();
    }
  }

  return (
    <div className="movie__list">
      <h2 className="list__title">
        {error ? "Error fetching data" : heading()}
      </h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards
            movie={movie}
            handleFavouriteMovie={props.handleFavouriteClick}
            AddFavourite={AddFavourite}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
