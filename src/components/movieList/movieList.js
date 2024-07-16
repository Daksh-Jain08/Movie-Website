import React, { useEffect, useState } from "react";
import "./movieList.css";
import Cards from "../card/card";
import { useParams } from "react-router-dom";
import axios from "axios";
import api from "../api";

const MovieList = (props) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  useEffect(() => {
    if (props.searchValue !== "") {
      console.log("searching");
      searchMovie();
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

  return (
    <div className="movie__list">
      <h2 className="list__title">
        {props.searchValue !== ""
          ? "Search for '" + props.searchValue + "'"
          : (type ? type : "POPULAR").toUpperCase()}
      </h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
