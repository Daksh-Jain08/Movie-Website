import React, { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";
import api from "../../components/api";


const Home = (props) => {
  const [popularMovies, setPopularMovies] = useState([]);

  const getMovies = async () => {
    const response = await api.get("/movie/popular", {
      params: {
        page: 1,
      },
    });
    const data = await response.data;
    setPopularMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...props.favourites, movie];
    props.setFavourites(newFavouriteList);
  };

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          showArrows={true}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.title : ""}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList
          searchValue={props.searchValue}
          handleFavouriteClick={addFavouriteMovie}
          setSearchValue={props.setSearchValue}
          favourites={props.favourites}
        />
      </div>
    </>
  );
};

export default Home;
