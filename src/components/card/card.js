import React, { useEffect, useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Cards = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <div className="cards">
          <Link
            to={`/movie/${props.movie.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <img
              className="cards__image"
              src={`https://image.tmdb.org/t/p/original/${props.movie.poster_path}`}
              alt={props.movie.title}
            />
            <div className="cards__overlay">
              <div className="cards__title">
                {props.movie ? props.movie.title : ""}
              </div>
              <div className="cards__runtime">
                {props.movie ? props.movie.release_date : ""}
                <div className="cards__rating">
                  {props.movie ? props.movie.vote_average : ""}
                  <i className="fas fa-star" />{" "}
                </div>
              </div>
              <div className="cards__description">
                {props.movie ? props.movie.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </Link>
          <props.AddFavourite
            handleFavouriteMovie={props.handleFavouriteMovie}
            movie={props.movie}
          />
        </div>
      )}
    </>
  );
};

export default Cards;
